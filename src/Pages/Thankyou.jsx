

// working 
// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { jsPDF } from 'jspdf';
// import './CSS/Thankyou.css';

// const Thankyou = () => {
//   useEffect(() => {
//     const order = JSON.parse(localStorage.getItem('orderDetails'));
//     if (order) {
//       const encodedOrder = encodeURIComponent(JSON.stringify(order));
//       window.open(`http://localhost:3001/inventory?order=${encodedOrder}`, '_blank');
//     }
//   }, []);

//   const handleDownloadInvoice = () => {
//     const order = JSON.parse(localStorage.getItem('orderDetails'));

//     if (!order) {
//       alert('No order details found to generate invoice.');
//       return;
//     }

//     const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

//     doc.setDrawColor(122, 123, 255);
//     doc.setLineWidth(0.5);
//     doc.rect(10, 10, 190, 277);

//     doc.setFont('helvetica', 'bold').setFontSize(18).setTextColor(0, 0, 0);
//     doc.text('INVOICE', 105, 26, { align: 'center' });
//     doc.setDrawColor(0).line(10, 30, 200, 30);

//     let y = 38;
//     const safe = (val, fallback = 'N/A') => val || fallback;

//     doc.setFont('helvetica', 'normal').setFontSize(12).setTextColor(0, 0, 0);
//     doc.text(`Customer Name: ${safe(order.name)}`, 15, y); y += 7;
//     doc.text(`Phone: ${safe(order.phone)}`, 15, y); y += 7;
//     doc.text(`Address: ${safe(order.address)}`, 15, y); y += 7;
//     doc.text(`Payment Method: ${safe(order.paymentMethod)}`, 15, y); y += 7;
//     doc.text(`Order Date: ${order.dateTime || new Date().toLocaleString()}`, 15, y); y += 7;

//     const deliveryDate = new Date();
//     deliveryDate.setDate(deliveryDate.getDate() + 3);
//     const formattedDeliveryDate = deliveryDate.toLocaleDateString('en-US', {
//       month: 'short', day: 'numeric', year: 'numeric'
//     });
//     doc.text(`Estimated Delivery: ${formattedDeliveryDate}`, 15, y); y += 7;

//     const trackingNumber = 'TRK' + Math.floor(Math.random() * 1_000_000).toString().padStart(6, '0');
//     doc.text(`Tracking Number: ${trackingNumber}`, 15, y); y += 7;

//     const status = safe(order.status, 'Pending');
//     const statusColor = status.toLowerCase() === 'delivered' ? [39, 174, 96] : [231, 76, 60];
//     doc.setTextColor(...statusColor).setFont('helvetica', 'bold').setFontSize(12);
//     doc.text(`Status: ${status}`, 15, y); y += 10;

//     doc.setDrawColor(0).line(10, y, 200, y); y += 7;

//     const xProduct = 15, xQty = 100, xUnit = 130, xTotal = 170;
//     doc.setFont('helvetica', 'bold').setFontSize(13).setTextColor(0, 0, 0);
//     doc.text('Product', xProduct, y);
//     doc.text('Qty', xQty, y, { align: 'center' });
//     doc.text('Unit Price', xUnit, y, { align: 'center' });
//     doc.text('Total', xTotal, y, { align: 'center' });

//     y += 2;
//     doc.line(10, y, 200, y); y += 6;

//     doc.setFont('helvetica', 'normal').setFontSize(12);
//     const items = order.items || [];
//     items.forEach((item) => {
//       const qty = Number(item.quantity) || 1;
//       const raw = item.price || item.new_price || item.old_price || 0;
//       const price = parseFloat(String(raw).replace(/[^\d.]/g, '')) || 0;
//       const total = (price * qty).toFixed(2);

//       doc.text(item.name || 'Item', xProduct, y);
//       doc.text(qty.toString(), xQty, y, { align: 'center' });
//       doc.text(price.toFixed(2), xUnit, y, { align: 'center' });
//       doc.text(total, xTotal, y, { align: 'center' });
//       y += 8;
//     });

//     y += 2;
//     doc.line(10, y, 200, y);

//     const subtotal = items.reduce((acc, item) => {
//       const qty = Number(item.quantity) || 1;
//       const raw = item.price || item.new_price || item.old_price || 0;
//       const pr = parseFloat(String(raw).replace(/[^\d.]/g, '')) || 0;
//       return acc + pr * qty;
//     }, 0);
//     const tax = +(subtotal * 0.18).toFixed(2);
//     const grandTotal = +(subtotal + tax).toFixed(2);

//     y += 10;
//     doc.setFont('helvetica', 'bold').setFontSize(14).setTextColor(0, 102, 0);
//     doc.text('Grand Total:', 155, y, { align: 'right' });
//     doc.text(grandTotal.toFixed(2), xTotal, y, { align: 'center' });

//     y += 20;
//     doc.setFont('helvetica', 'normal').setFontSize(11).setTextColor(100, 100, 100);
//     doc.text('Thank you for shopping with MyStore!', 105, y, { align: 'center' });

//     const fileName = `Invoice_${safe(order.name).replace(/\s+/g, '_')}_${Date.now()}.pdf`;
//     doc.save(fileName);
//   };

//   return (
//     <div className="thankyou-container">
//       <div className="balloons">
//         {[...Array(10)].map((_, i) => (
//           <div key={i} className={`balloon balloon-${i % 5 + 1}`} />
//         ))}
//       </div>
//       <div className="confetti" />
//       <div className="thankyou-box">
//         <h1 className="emoji">🎉 Thank You for Your Order!</h1>
//         <p>Your items will be shipped soon.</p>
//         <p className="subtext">You’ll receive an email confirmation shortly.</p>
//         <div className="button-group">
//           <button className="download-btn" onClick={handleDownloadInvoice}>
//             📄 Download Invoice
//           </button>
//           <Link to="/"><button className="home-btn">Back to Home</button></Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Thankyou;

// src/components/Thankyou.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import './CSS/Thankyou.css';

const Thankyou = () => {
  // ─────────────────────────────────────────────────────────────────────────────
  // 1) REACT STATE: store order details and the live “Pending/Delivered” status
  // ─────────────────────────────────────────────────────────────────────────────
  const [orderDetails, setOrderDetails] = useState(null);
  const [orderStatus, setOrderStatus] = useState('Pending'); 
  // default to “Pending” until Inventory window tells us otherwise

  // ─────────────────────────────────────────────────────────────────────────────
  // 2) ON MOUNT: load orderDetails from localStorage (populated at checkout)
  //    and immediately open the Inventory window/tab so the user can mark Delivered.
  // ─────────────────────────────────────────────────────────────────────────────
  useEffect(() => {
    const stored = localStorage.getItem('orderDetails');
    if (!stored) return;           // no order found → nothing to do
    const parsed = JSON.parse(stored);
    setOrderDetails(parsed);

    // Open the Inventory app in a new tab so the user can toggle status.
    // We omit any specific “orderId” here for simplicity,
    // but you could append ?orderId=XYZ to the URL if needed.
    window.open('http://localhost:3001/inventory', '_blank');

    // ───────────────────────────────────────────────────────────────────────────
    // 3) SET UP A POSTMESSAGE LISTENER so that when Inventory calls:
    //       window.opener.postMessage({ status: 'Delivered' }, 'http://localhost:3000');
    //    we receive that { status } payload and store it in our own state.
    // ───────────────────────────────────────────────────────────────────────────
    const handleMessage = (event) => {
      // SECURITY CHECK: only accept messages from your Inventory origin
      if (event.origin !== 'http://localhost:3001') return;

      const data = event.data;
      if (data && data.status) {
        setOrderStatus(data.status);
      }
    };

    window.addEventListener('message', handleMessage);

    // CLEAN UP on unmount
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  // ─────────────────────────────────────────────────────────────────────────────
  // 4) PDF GENERATION: includes the orderStatus text right under customer info
  // ─────────────────────────────────────────────────────────────────────────────
  const handleDownloadInvoice = () => {
    if (!orderDetails) {
      alert('No order details found to generate invoice.');
      return;
    }

    // Create a new A4 PDF (mm units, portrait)
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

    // Draw the blue border
    doc.setDrawColor(0, 123, 255);
    doc.setLineWidth(0.5);
    doc.rect(10, 10, 190, 277); // x=10, y=10, width=190, height=277

    // “INVOICE” title (centered)
    doc.setFont('helvetica', 'bold').setFontSize(20);
    doc.text('INVOICE', 105, 20, { align: 'center' });

    // Thin black line under title
    doc.setDrawColor(0);
    doc.setLineWidth(0.5);
    doc.line(10, 25, 200, 25);

    // Starting y-coordinate for customer info
    let cursorY = 35;
    doc.setFont('helvetica', 'normal').setFontSize(12);

    // 1) Customer Name
    doc.text(`Customer Name: ${orderDetails.name}`, 15, cursorY);
    cursorY += 7;

    // 2) Phone
    doc.text(`Phone: ${orderDetails.phone}`, 15, cursorY);
    cursorY += 7;

    // 3) Address
    doc.text(`Address: ${orderDetails.address}`, 15, cursorY);
    cursorY += 7;

    // 4) Payment Method
    doc.text(`Payment Method: ${orderDetails.paymentMethod}`, 15, cursorY);
    cursorY += 7;

    // 5) Order Date
    doc.text(`Order Date: ${orderDetails.dateTime || new Date().toLocaleString()}`, 15, cursorY);
    cursorY += 7;

    // 6) **NEW**: ORDER STATUS (Pending or Delivered)
    //    We’ve been updating `orderStatus` via postMessage, so this
    //    will always reflect the latest user click in Inventory.jsx.
    doc.setFont('helvetica', 'bold').setFontSize(12);
    doc.text(`Order Status: ${orderStatus}`, 15, cursorY);
    doc.setFont('helvetica', 'normal'); // revert to normal
    cursorY += 10;

    // Horizontal separator line before the table
    doc.setDrawColor(0).setLineWidth(0.5);
    doc.line(10, cursorY, 200, cursorY);
    cursorY += 7;

    // TABLE HEADERS: exact x positions so numbers align perfectly.
    const xProduct   = 15;
    const xQty       = 100;
    const xUnitPrice = 130;
    const xTotal     = 170;

    doc.setFont('helvetica', 'bold').setFontSize(13);
    doc.text('Product',    xProduct,   cursorY);
    doc.text('Qty',        xQty,       cursorY, { align: 'center' });
    doc.text('Unit Price', xUnitPrice, cursorY, { align: 'center' });
    doc.text('Total',      xTotal,     cursorY, { align: 'center' });

    // Thin line under headers
    cursorY += 2;
    doc.setLineWidth(0.3);
    doc.line(10, cursorY, 200, cursorY);

    // Now list each cart item
    doc.setFont('helvetica', 'normal').setFontSize(12);
    cursorY += 6; // small gap before writing the first row

    orderDetails.items.forEach((item) => {
      const qty = Number(item.quantity) || 1;
      const rawPrice = item.price || item.new_price || item.old_price || 0;
      const price = parseFloat(String(rawPrice).replace(/[^\d.]/g, '')) || 0;
      const rowTotal = (price * qty).toFixed(2);

      // a) Product name (left‑aligned)
      doc.text(item.name, xProduct, cursorY);

      // b) Quantity (centered under “Qty”)
      doc.text(qty.toString(), xQty, cursorY, { align: 'center' });

      // c) Unit Price (centered under “Unit Price”)
      doc.text(price.toFixed(2), xUnitPrice, cursorY, { align: 'center' });

      // d) Line Total (centered under “Total”)
      doc.text(rowTotal, xTotal, cursorY, { align: 'center' });

      cursorY += 8; // move down for next product row
    });

    // Separator line after items
    cursorY += 2;
    doc.setLineWidth(0.5);
    doc.setDrawColor(0);
    doc.line(10, cursorY, 200, cursorY);

    // Compute Subtotal / Tax / Grand Total
    const subtotal = orderDetails.items.reduce((acc, item) => {
      const qty = Number(item.quantity) || 1;
      const raw = item.price || item.new_price || item.old_price || 0;
      const pr = parseFloat(String(raw).replace(/[^\d.]/g, '')) || 0;
      return acc + pr * qty;
    }, 0);
    const tax = +(subtotal * 0.18).toFixed(2);
    const grandTotal = +(subtotal + tax).toFixed(2);

    // Print “Grand Total” (in green bold) slightly below
    cursorY += 10;
    doc.setFont('helvetica', 'bold').setFontSize(14).setTextColor(0, 102, 0);

    // “Grand Total:” right‑aligned at x=155
    doc.text('Grand Total:', 155, cursorY, { align: 'right' });
    // Amount centered under “Total” (xTotal = 170)
    doc.text(grandTotal.toFixed(2), xTotal, cursorY, { align: 'center' });

    // Footer “Thank you” note
    cursorY += 20;
    doc.setFont('helvetica', 'normal').setFontSize(11).setTextColor(100, 100, 100);
    doc.text('Thank you for shopping with us!', 105, cursorY, { align: 'center' });

    // Finally, save the PDF with a timestamped filename
    const fileName = `Invoice_${orderDetails.name.replace(/\s+/g, '_')}_${Date.now()}.pdf`;
    doc.save(fileName);
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // 5) JSX OUTPUT: “Thank You” message + “Download Invoice” button + “Back to Home”
  // ─────────────────────────────────────────────────────────────────────────────
  return (
    <div className="thankyou-container">
      <div className="thankyou-box">
        <h1 className="emoji">🎉 Thank You for Your Order!</h1>
        <p>Your items will be shipped soon.</p>
        <p className="subtext">You’ll receive an email confirmation shortly.</p>

        <div className="button-group">
          <button className="download-btn" onClick={handleDownloadInvoice}>
            📄 Download Invoice
          </button>
          <Link to="/">
            <button className="home-btn">🏠 Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
