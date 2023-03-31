import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Questions from './components/Questions';
import About from './components/About';
import HexDecimal from './components/HexDecimal';
import Privacy from './components/Privacy';
import SourceCode from './components/SourceCode';
import TextEditor from './components/TextEditor';
// import NotFound from './components/404';
import
{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/questions",
    element: <Questions />
  },
  {
    path: "/youtube-tutorials-source-code",
    element: <SourceCode name='5' />
  },
  {
    path: "/youtube-tutorials-source-code/data-visualization-part01",
    element: <SourceCode name='7' />
  },
  {
    path: "/youtube-tutorials-source-code/online-text-editor-javascript",
    element: <SourceCode name='6' />
  },
  {
    path: "/youtube-tutorials-source-code/convert-hex-to-decimal",
    element: <SourceCode name='4' />
  },
  {
    path: "/youtube-tutorials-source-code/custom-video-player-html-css-javascript",
    element: <SourceCode name='3' />
  },
  {
    path: "/how-to-convert-hex-to-decimal",
    element: <HexDecimal name='hex' />
  },
  {
    path: "/how-to-convert-decimal-to-hex",
    element: <HexDecimal name='decimal' />
  },
  {
    path: "/online-text-editor-online-code-editor-online-notepad",
    element: <TextEditor />
  },
  {
    path: "/privacy/color-reference",
    element: <Privacy name="cr" />
  },
  {
    path: "/privacy/http-response-status-code",
    element: <Privacy name="hrc" />
  },
  {
    path: "/privacy/dream-board",
    element: <Privacy name="db" />
  },
  {
    path: "/privacy/text-editor",
    element: <Privacy name="te" />
  }
]);

function App ()
{
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <TextEditor /> */}
      <Footer />
    </div>
  );
}

export default App;
