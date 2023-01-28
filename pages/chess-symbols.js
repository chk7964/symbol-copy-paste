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
        title="Chess Symbols"
        description="Free Repeat Text Generator - Copy & Paste | Download And Print Any Typed Text, leeter, Words, Sentense And phrases."
      />
      <ToastContainer />



      <div className='p-4  '>
        <div className="area" >
          <span className="bt" onClick={copy} data-clipboard-text="	♔	">	♔	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	♕	">	♕	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	♖	">	♖	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	♗	">	♗	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	♘	">	♘	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	♙	">	♙	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	♚	">	♚	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	♛	">	♛	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	♜	">	♜	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	♝	">	♝	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	♞	">	♞	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	♟	">	♟	</span></div>
        <br />
        <table>
          <thead><tr><th>Chess Symbols</th><th>Symbol Name</th><th>Dec Code</th><th>Hex Code</th><th>Unicode</th></tr></thead>
          <tbody>
            <tr>
              <td>♔</td>
              <td>White Chess King</td>
              <td>&amp;#9812;</td>
              <td>&amp;#x2654;</td>
              <td>U+2654</td>
            </tr>
            <tr>
              <td>♕</td>
              <td>White Chess Queen</td>
              <td>&amp;#9813;</td>
              <td>&amp;#x2655;</td>
              <td>U+2655</td>
            </tr>
            <tr>
              <td>♖</td>
              <td>White Chess Rook</td>
              <td>&amp;#9814;</td>
              <td>&amp;#x2656;</td>
              <td>U+2656</td>
            </tr>
            <tr>
              <td>♗</td>
              <td>White Chess Bishop</td>
              <td>&amp;#9815;</td>
              <td>&amp;#x2657;</td>
              <td>U+2657</td>
            </tr>
            <tr>
              <td>♘</td>
              <td>White Chess Knight</td>
              <td>&amp;#9816;</td>
              <td>&amp;#x2658;</td>
              <td>U+2658</td>
            </tr>
            <tr>
              <td>♙</td>
              <td>White Chess Pawn</td>
              <td>&amp;#9817;</td>
              <td>&amp;#x2659;</td>
              <td>U+2659</td>
            </tr>
            <tr>
              <td>♚</td>
              <td>Black Chess King</td>
              <td>&amp;#9818;</td>
              <td>&amp;#x265A;</td>
              <td>U+265A</td>
            </tr>
            <tr>
              <td>♛</td>
              <td>Black Chess Queen</td>
              <td>&amp;#9819;</td>
              <td>&amp;#x265B;</td>
              <td>U+265B</td>
            </tr>
            <tr>
              <td>♜</td>
              <td>Black Chess Rook</td>
              <td>&amp;#9820;</td>
              <td>&amp;#x265C;</td>
              <td>U+265C</td>
            </tr>
            <tr>
              <td>♝</td>
              <td>Black Chess Bishop</td>
              <td>&amp;#9821;</td>
              <td>&amp;#x265D;</td>
              <td>U+265D</td>
            </tr>
            <tr>
              <td>♞</td>
              <td>Black Chess Knight</td>
              <td>&amp;#9822;</td>
              <td>&amp;#x265E;</td>
              <td>U+265E</td>
            </tr>
            <tr>
              <td>♟</td>
              <td>Black Chess Pawn</td>
              <td>&amp;#9823;</td>
              <td>&amp;#x265F;</td>
              <td>U+265F</td>
            </tr>
          </tbody></table>
      </div>


    </>
  )
}

