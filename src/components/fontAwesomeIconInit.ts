import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCalendarAlt,
  faChartBar, faChartPie, faCheckCircle,
  faCheckSquare, faCircleNotch,
  faCoffee, faCubes,
  faDownload, faExclamationCircle,
  faExternalLinkAlt, faFlag, faFolderOpen, faGraduationCap, faHammer, faHighlighter, faInfoCircle, faPencilAlt,
  faTag, faTerminal, faThLarge,
} from '@fortawesome/free-solid-svg-icons';
import { fab, faGalacticRepublic, faGithub, faJs, faJsSquare } from '@fortawesome/free-brands-svg-icons';

library.add(
  fab as any,
  faCheckSquare,
  faCoffee,
  faDownload,
  faTag,
  faExternalLinkAlt,
  faChartPie,
  faFlag,
  faExclamationCircle,
  faCalendarAlt,
  faCircleNotch,
  faFolderOpen,
  faJsSquare as any,
  faJs as any,
  faHighlighter,
  faTerminal,
  faGalacticRepublic as any,
  faCheckCircle,
  faGraduationCap,
  faInfoCircle,
  faCubes,
  faPencilAlt,
  faHammer,
  faThLarge
)
