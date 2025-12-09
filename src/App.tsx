import { ResumePage } from "./components/ResumePage";
import { resumeData } from "./content/resume";

function App() {
  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen py-8">
      <div className="no-print mb-4 flex justify-center">
        <button
          onClick={handleDownload}
          className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors"
        >
          Download PDF
        </button>
      </div>
      <ResumePage data={resumeData} />
    </div>
  );
}

export default App;
