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
        title="Camera Symbols"
        description="Free Repeat Text Generator - Copy & Paste | Download And Print Any Typed Text, leeter, Words, Sentense And phrases."
      />
      <ToastContainer />



      <div className='p-4  '>

        <div className="area" >
          <span className="bt" onClick={copy} data-clipboard-text="	🎥	">	🎥	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	📷	">	📷	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	📸	">	📸	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	📹	">	📹	</span></div>
        <br />
        <div className='overflow-x-auto'>
          <table>
            <thead>
              <tr><th>Camera Symbol</th><th>Symbol Name</th><th>Dec Code</th><th>Hex Code</th><th>Unicode</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>🎥</td>
                <td>Movie Camera</td>
                <td>&amp;#127909;</td>
                <td>&amp;#x1F3A5</td>
                <td>U+1F3A5</td>
              </tr>
              <tr>
                <td>📷</td>
                <td>Camera</td>
                <td>&amp;#128247;</td>
                <td>&amp;#x1F4F7</td>
                <td>U+1F4F7</td>
              </tr>
              <tr>
                <td>📸</td>
                <td>Camera with Flash</td>
                <td>&amp;#128248;</td>
                <td>&amp;#x1F4F8</td>
                <td>U+1F4F8</td>
              </tr>
              <tr>
                <td>📹</td>
                <td>Video Camera</td>
                <td>&amp;#128249;</td>
                <td>&amp;#x1F4F9</td>
                <td>U+1F4F9</td>
              </tr>
            </tbody></table>
        </div>

      </div>


    </>
  )
}

