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
        title="Text Reapeater"
        description="Free Repeat Text Generator - Copy & Paste | Download And Print Any Typed Text, leeter, Words, Sentense And phrases."
      />
      <ToastContainer />



      <div className='p-4  '>
        <p>Zeta symbol for copy paste.</p>
        <div className="area">
          <span className="bt" onClick={copy} data-clipboard-text="	Ξ	">	Ξ	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	ΞΆ	">	ΞΆ	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	π	">	π	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	π­	">	π­	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	π	">	π	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	π§	">	π§	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	π	">	π	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	π‘	">	π‘	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	π»	">	π»	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	π	">	π	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	π΅	">	π΅	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	π	">	π	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	π―	">	π―	</span>
        </div><br />
        <div className='overflow-x-auto'>
          <table>

            <thead><tr><th>Zeta Symbol</th><th>Symbol Name</th><th>Dec Code</th><th>Hex Code</th><th>Unicode</th></tr></thead><tbody>
              <tr>
                <td>Ξ</td>
                <td>Greek Capital Letter Zeta</td>
                <td>&amp;#918;</td>
                <td>&amp;#x0396;</td>
                <td>U+0396</td>
              </tr>
              <tr>
                <td>ΞΆ</td>
                <td>Greek Small Letter Zeta</td>
                <td>&amp;#950;</td>
                <td>&amp;#x03B6;</td>
                <td>U+03B6</td>
              </tr>
              <tr>
                <td>π</td>
                <td>Ugaritic Letter Zeta</td>
                <td>&amp;#66439;</td>
                <td>&amp;#x10387;</td>
                <td>U+10387</td>
              </tr>
              <tr>
                <td>π­</td>
                <td>Mathematical Bold Capital Zeta</td>
                <td>&amp;#120493;</td>
                <td>&amp;#x1D6AD;</td>
                <td>U+1D6AD</td>
              </tr>
              <tr>
                <td>π</td>
                <td>Mathematical Bold Small Zeta</td>
                <td>&amp;#120519;</td>
                <td>&amp;#x1D6C7;</td>
                <td>U+1D6C7</td>
              </tr>
              <tr>
                <td>π§</td>
                <td>Mathematical Italic Capital Zeta</td>
                <td>&amp;#120551;</td>
                <td>&amp;#x1D6E7;</td>
                <td>U+1D6E7</td>
              </tr>
              <tr>
                <td>π</td>
                <td>Mathematical Italic Small Zeta</td>
                <td>&amp;#120577;</td>
                <td>&amp;#x1D701;</td>
                <td>U+1D701</td>
              </tr>
              <tr>
                <td>π‘</td>
                <td>Mathematical Bold Italic Capital Zeta</td>
                <td>&amp;#120609;</td>
                <td>&amp;#x1D721;</td>
                <td>U+1D721</td>
              </tr>
              <tr>
                <td>π»</td>
                <td>Mathematical Bold Italic Small Zeta</td>
                <td>&amp;#120635;</td>
                <td>&amp;#x1D73B;</td>
                <td>U+1D73B</td>
              </tr>
              <tr>
                <td>π</td>
                <td>Mathematical Sans-Serif Bold Capital Zeta</td>
                <td>&amp;#120667;</td>
                <td>&amp;#x1D75B;</td>
                <td>U+1D75B</td>
              </tr>
              <tr>
                <td>π΅</td>
                <td>Mathematical Sans-Serif Bold Small Zeta</td>
                <td>&amp;#120693;</td>
                <td>&amp;#x1D775;</td>
                <td>U+1D775</td>
              </tr>
              <tr>
                <td>π</td>
                <td>Mathematical Sans-Serif Bold Italic Capital Zeta</td>
                <td>&amp;#120725;</td>
                <td>&amp;#x1D795;</td>
                <td>U+1D795</td>
              </tr>
              <tr>
                <td>π―</td>
                <td>Mathematical Sans-Serif Bold Italic Small Zeta</td>
                <td>&amp;#120751;</td>
                <td>&amp;#x1D7AF;</td>
                <td>U+1D7AF</td>
              </tr>
            </tbody></table>
        </div>
      </div>

    </>
  )
}

