import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const LETTER_WIDTH_IN = 8.5;
const LETTER_HEIGHT_IN = 11;
const DPI = 300;

export async function exportToPdf(
  element: HTMLElement,
  filename: string = "Michael-Stuart-Resume.pdf"
): Promise<void> {
  const canvas = await html2canvas(element, {
    scale: DPI / 96,
    useCORS: true,
    logging: false,
    backgroundColor: "#ffffff",
  });

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "in",
    format: "letter",
  });

  const imgData = canvas.toDataURL("image/png");
  pdf.addImage(imgData, "PNG", 0, 0, LETTER_WIDTH_IN, LETTER_HEIGHT_IN);
  pdf.save(filename);
}
