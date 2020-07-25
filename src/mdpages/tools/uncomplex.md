---
slug: "/tools/uncomplex"
category: "tools"
date: "2020-06-01"
icon: "fab/js-square"
title: "Uncomplex"
description: "JSON.stringify/parse for complex data structures"
cli: "npm install uncomplex"
tags: NPM Library,No Dependencies,JSON
github: "lukasbach/uncomplex"
travis: "com/lukasbach/uncomplex"
npm:
    - uncomplex
---


> JSON.stringify/parse for complex data structures

Uncomplex is a library without dependencies for serializing and deserializing JavaScript datastructures
that contain complex objects such as class instances. It works be defining so called
*EntityInterfaces* that detect whether they are compatible with a specified substructure,
convert it when serializing an object and reconvert it when parsing an object.

## Quick Start

Install the package via

    yarn add uncomplex
    
and call the following methods:

```ts
import { Uncomplex } from 'uncomplex';

const uncomplex = Uncomplex.new().withEntityInterfaces(...entityInterfaces);
const stringified: string = uncomplex.stringifyObject(object);
const parsed: CustomDataStructure = uncomplex.parseObject(stringified);
```

You can define a custom EntityInterface by implementing ``EntityInterface``:

```ts
export interface UncomplexEntityInterface<Original = any, Simplified extends object = object, SimplifyState extends object = any, ParseState extends object = SimplifyState> {
  entityId: string;
  applicableClasses?: any[];
  isApplicable?: (object: Original) => boolean;
  simplifyObject: (object: Original, key: string | number | undefined, state: Partial<SimplifyState>) => Simplified;
  parseObject: (object: Simplified, key: string | number | undefined, state: Partial<ParseState>) => Original;
}
```
    
Note that either ``applicableClasses`` (specifies a list of classes for which ``instanceof`` is used
to determine whether the class can be mapped by the EntityInterface) or ``isApplicable`` must be
implemented.

Alternatively, the following EntityInterfaces are implemented and can be imported from
the uncomplex library:

- ``BigIntEntityInterface``: Converts ``bigint`` instances
- ``DateEntityInterface``: Converts ``Date`` instances
- ``MapEntityInterface``: Converts ``Map`` instances
- ``SymbolEntityInterface``: Converts ``symbol`` instances
    
## Basic Example

The following example can be found at ``examples/customDataStructure.ts`` and can be run
via ``yarn example:customDataStructure``.

```ts
class Example {
  public param: string;
  constructor(param: string) {
    this.param = param;
  }
}

export const ExampleEntityInterface: UncomplexEntityInterface<Example, { p: string }> = {
  entityId: 'Example',
  applicableClasses: [Example],
  simplifyObject: object => ({ p: object.param }),
  parseObject: object => new Example(object.p)
};

const uncomplex = Uncomplex.new().withEntityInterfaces(ExampleEntityInterface);
const example = { ex: new Example('test') };
const asString = uncomplex.stringifyObject(example);

console.log(asString);
// {"ex":{"p":"test","__uncomplexId":"Example"}}

const parsed = uncomplex.parseObject(asString);
console.log(parsed.ex instanceof Example, parsed.ex.param);
// true 'test'
```

## Example using predefined EntityInterfaces

The following example can be found at ``examples/nativeDataStructure.ts`` and can be run
via ``yarn example:nativeDataStructure``.

```ts
const uncomplex = Uncomplex.new().withEntityInterfaces(
  BigIntEntityInterface, DateEntityInterface, MapEntityInterface, SymbolEntityInterface);

const map = new Map();
map.set('a', 'aa');
map.set('b', 42);

const sym1 = Symbol('a');
const sym2 = Symbol('b');

const example = { bigInt: BigInt(9999999999999), date: new Date(1800000000000), map, sym1, sym2, sym1alt: sym1 };
const asString = uncomplex.stringifyObject(example);

console.log(asString);
// {
//   "bigInt":{"n":"9999999999999","__uncomplexId":"BigInt"},
//   "date":{"iso":"2027-01-15T08:00:00.000Z","__uncomplexId":"Date"},
//   "map":{"entries":[["a","aa"],["b",42]],"__uncomplexId":"Map"},
//   "sym1":{"id":0,"key":"a","__uncomplexId":"Symbol"},
//   "sym2":{"id":1,"key":"b","__uncomplexId":"Symbol"},
//   "sym1alt":{"id":0,"key":"a","__uncomplexId":"Symbol"}
// }

const parsed = uncomplex.parseObject(asString);
console.log(parsed);
// { bigInt: 9999999999999n,
//   date: 2027-01-15T08:00:00.000Z,
//   map: Map { 'a' => 'aa', 'b' => 42 },
//   sym1: Symbol(a),
//   sym2: Symbol(b),
//   sym1alt: Symbol(a) }

console.log(parsed.sym1 === parsed.sym2, parsed.sym1 === parsed.sym1alt);
// false, true
```