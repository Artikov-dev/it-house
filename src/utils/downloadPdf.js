import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

/**
 * Captures the target DOM element as an image and exports a landscape PDF using jsPDF.
 * @param {HTMLElement} element - The DOM element to capture (the certificate container)
 * @param {string} studentFullName - The full name of the student for the filename
 */
export async function downloadPdf(element, studentFullName) {
  if (!element) {
    console.error('Certificate element not found');
    return false;
  }

  try {
    // Hide any download/action buttons inside element if present during snapshot
    const canvas = await html2canvas(element, {
      scale: 3, // High resolution crisp rendering
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      onclone: (clonedDoc) => {
        // Ensure cloned element is visible and properly sized
        const clonedElement = clonedDoc.querySelector('[data-certificate-root]');
        if (clonedElement) {
          clonedElement.style.transform = 'none';
          clonedElement.style.boxShadow = 'none';
        }
      }
    });

    const imgData = canvas.toDataURL('image/png', 1.0);
    
    // Create A4 Landscape PDF: 297mm width x 210mm height
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4'
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');

    const sanitizedName = (studentFullName || 'Student')
      .trim()
      .replace(/\s+/g, '_')
      .replace(/[^a-zA-Z0-9_-]/g, '');

    const filename = `Figma-Certificate-${sanitizedName || 'Student'}.pdf`;
    pdf.save(filename);
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
}
