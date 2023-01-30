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
        title="Empty Set Symbol"
        description="Free Repeat Text Generator - Copy & Paste | Download And Print Any Typed Text, leeter, Words, Sentense And phrases."
      />
      <ToastContainer />



      <div className='p-4  '>

        <div className="area" >
          <span className="bt" onClick={copy} data-clipboard-text="	∅	">	∅	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⦰	">	⦰	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⦱	">	⦱	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⦲	">	⦲	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⦳	">	⦳	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⦴	">	⦴	</span></div>
        <br />
        <div className='overflow-x-auto'>
          <table>
            <thead><tr><th>Empty Set Symbol</th><th>Symbol Name</th><th>Dec Code</th><th>Hex Code</th><th>Unicode</th></tr></thead>
            <tbody>
              <tr>
                <td>∅</td>
                <td>Empty Set</td>
                <td>&amp;#8709;</td>
                <td>&amp;#x2205</td>
                <td>U+2205</td>
              </tr>
              <tr>
                <td>⦰</td>
                <td>Reversed Empty Set</td>
                <td>&amp;#10672;</td>
                <td>&amp;#x29B0</td>
                <td>U+29B0</td>
              </tr>
              <tr>
                <td>⦱</td>
                <td>Empty Set with Overbar</td>
                <td>&amp;#10673;</td>
                <td>&amp;#x29B1</td>
                <td>U+29B1</td>
              </tr>
              <tr>
                <td>⦲</td>
                <td>Empty Set with Small Circle Above</td>
                <td>&amp;#10674;</td>
                <td>&amp;#x29B2</td>
                <td>U+29B2</td>
              </tr>
              <tr>
                <td>⦳</td>
                <td>Empty Set with Right Arrow Above</td>
                <td>&amp;#10675;</td>
                <td>&amp;#x29B3</td>
                <td>U+29B3</td>
              </tr>
              <tr>
                <td>⦴</td>
                <td>Empty Set with Left Arrow Above</td>
                <td>&amp;#10676;</td>
                <td>&amp;#x29B4</td>
                <td>U+29B4</td>
              </tr>
            </tbody></table>
        </div>
      </div>

    </>
  )
}

