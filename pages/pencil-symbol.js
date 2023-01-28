import Head from 'next/head';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipboardJS from 'clipboard';
import { NextSeo } from 'next-seo';

export default function textrepeater() {
  const copy = () => {
    var clipboard = new ClipboardJS('.bt');
    clipboard.on('success', function (e) {
      console.info('Action:', e.action);
      console.info('Text:', e.text);
      console.info('Trigger:', e.trigger);
      toast["success"]("Text Is Copied " + e.text)
      e.clearSelection();
      clipboard.destroy();
    });

    clipboard.on('error', function (e) {
      toast["warning"]("Output Is Empty");
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
      clipboard.destroy();
    });
  }



  return (
    <>
      <NextSeo
        title="Pencil Symbol [Copy And Paste]"
        description="Free Repeat Text Generator - Copy & Paste | Download And Print Any Typed Text, leeter, Words, Sentense And phrases."
      />
      <ToastContainer />



      <div className='p-4  '>
        <p>You can copy here to Pencil Symbol.</p>
        <div className="area " >
          <span className="bt" onClick={copy} data-clipboard-text="	✎	">	✎	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	✏	">	✏	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	✐	">	✐	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	🖉	">	🖉	</span></div>
        <br />
        <div class=" overflow-x-auto">
          <table className='w-full table-auto '>
            <thead><tr><th>Pencil Symbol</th><th>Symbol Name</th><th>Dec Code</th><th>Hex Code</th><th>Unicode</th></tr></thead>
            <tbody>
              <tr>
                <td>✎</td>
                <td>Lower Right Pencil</td>
                <td>&amp;#9998;</td>
                <td>&amp;#x270E</td>
                <td>U+270E</td>
              </tr>
              <tr>
                <td>✏</td>
                <td>Pencil</td>
                <td>&amp;#9999;</td>
                <td>&amp;#x270F</td>
                <td>U+270F</td>
              </tr>
              <tr>
                <td>✐</td>
                <td>Upper Right Pencil</td>
                <td>&amp;#10000;</td>
                <td>&amp;#x2710</td>
                <td>U+2710</td>
              </tr>
              <tr>
                <td>🖉</td>
                <td>Lower Left Pencil</td>
                <td>&amp;#128393;</td>
                <td>&amp;#x1F589</td>
                <td>U+1F589</td>
              </tr>
            </tbody></table>
        </div>
      </div>


    </>
  )
}

