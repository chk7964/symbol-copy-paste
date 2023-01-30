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
        title="Corner Symbols"
        description="Free Repeat Text Generator - Copy & Paste | Download And Print Any Typed Text, leeter, Words, Sentense And phrases."
      />
      <ToastContainer />



      <div className='p-4  '>
        <div className="area">
          <span className="bt" onClick={copy} data-clipboard-text="	﹄	">	﹄	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	﹃	">	﹃	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	﹂	">	﹂	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	﹁	">	﹁	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┕	">	┕	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┓	">	┓	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	└	">	└	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┐	">	┐	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┖	">	┖	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┒	">	┒	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┗	">	┗	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┑	">	┑	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┍	">	┍	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┙	">	┙	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┏	">	┏	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┛	">	┛	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┎	">	┎	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┚	">	┚	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┌	">	┌	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┘	">	┘	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	「	">	「	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	」	">	」	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	『	">	『	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	』	">	』	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	˩	">	˩	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	˥	">	˥	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	├	">	├	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┝	">	┝	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┞	">	┞	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┟	">	┟	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┠	">	┠	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┡	">	┡	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┢	">	┢	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┣	">	┣	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┤	">	┤	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┥	">	┥	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┦	">	┦	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┧	">	┧	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┨	">	┨	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┩	">	┩	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┪	">	┪	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┫	">	┫	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┬	">	┬	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┭	">	┭	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┮	">	┮	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┯	">	┯	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┰	">	┰	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┱	">	┱	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┲	">	┲	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┳	">	┳	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┴	">	┴	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┵	">	┵	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┶	">	┶	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┷	">	┷	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┸	">	┸	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┹	">	┹	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┺	">	┺	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┻	">	┻	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┼	">	┼	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┽	">	┽	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┾	">	┾	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	┿	">	┿	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╀	">	╀	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╁	">	╁	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╂	">	╂	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╃	">	╃	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╄	">	╄	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╅	">	╅	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╆	">	╆	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╇	">	╇	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╈	">	╈	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╉	">	╉	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╊	">	╊	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╋	">	╋	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╒	">	╒	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╕	">	╕	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╓	">	╓	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╖	">	╖	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╔	">	╔	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╗	">	╗	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╘	">	╘	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╛	">	╛	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╙	">	╙	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╜	">	╜	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╚	">	╚	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╝	">	╝	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╞	">	╞	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╡	">	╡	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╟	">	╟	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╢	">	╢	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╠	">	╠	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╣	">	╣	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╥	">	╥	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╨	">	╨	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╧	">	╧	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╤	">	╤	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╦	">	╦	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╩	">	╩	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╪	">	╪	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╫	">	╫	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╬	">	╬	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	〒	">	〒	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⊢	">	⊢	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⊣	">	⊣	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⊤	">	⊤	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⊥	">	⊥	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╭	">	╭	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╮	">	╮	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╯	">	╯	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	╰	">	╰	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⊦	">	⊦	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⊧	">	⊧	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⊨	">	⊨	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⊩	">	⊩	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⊪	">	⊪	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⊫	">	⊫	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⊬	">	⊬	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⊭	">	⊭	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⊮	">	⊮	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⊯	">	⊯	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⊺	">	⊺	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	〦	">	〦	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	〧	">	〧	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	〨	">	〨	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	˦	">	˦	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	˧	">	˧	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	˨	">	˨	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⑁	">	⑁	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⑂	">	⑂	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⑃	">	⑃	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	∟	">	∟	</span>
        </div>
        <br />
        <div className='overflow-x-auto'>
          <table>
            <thead><tr><th>Corner Symbols</th><th>Symbol Name</th><th>Dec Code</th><th>Hex Code</th><th>Unicode</th></tr></thead>
            <tbody>
              <tr>
                <td>﹄</td>
                <td>Presentation Form For Vertical Right White Corner Bracket</td>
                <td>&amp;#65092;</td>
                <td>&amp;#xFE44;</td>
                <td>U+FE44</td>
              </tr>
              <tr>
                <td>﹃</td>
                <td>Presentation Form For Vertical Left White Corner Bracket</td>
                <td>&amp;#65091;</td>
                <td>&amp;#xFE43;</td>
                <td>U+FE43</td>
              </tr>
              <tr>
                <td>﹂</td>
                <td>Presentation Form For Vertical Right Corner Bracket</td>
                <td>&amp;#65090;</td>
                <td>&amp;#xFE42;</td>
                <td>U+FE42</td>
              </tr>
              <tr>
                <td>﹁</td>
                <td>Presentation Form For Vertical Left Corner Bracket</td>
                <td>&amp;#65089;</td>
                <td>&amp;#xFE41;</td>
                <td>U+FE41</td>
              </tr>
              <tr>
                <td>┕</td>
                <td>Box Drawings Up Light And Right Heavy</td>
                <td>&amp;#9493;</td>
                <td>&amp;#x2515;</td>
                <td>U+2515</td>
              </tr>
              <tr>
                <td>┓</td>
                <td>Box Drawings Heavy Down And Left&nbsp;</td>
                <td>&amp;#9491;</td>
                <td>&amp;#x2513;</td>
                <td>U+2513</td>
              </tr>
              <tr>
                <td>└</td>
                <td>Box Drawings Light Up And Right</td>
                <td>&amp;#9492;</td>
                <td>&amp;#x2514;</td>
                <td>U+2514</td>
              </tr>
              <tr>
                <td>┐</td>
                <td>Box Drawings Light Down And Left</td>
                <td>&amp;#9488;</td>
                <td>&amp;#x2510;</td>
                <td>U+2510</td>
              </tr>
              <tr>
                <td>┖</td>
                <td>Box Drawings Up Heavy And Right Light</td>
                <td>&amp;#9494;</td>
                <td>&amp;#x2516;</td>
                <td>U+2516</td>
              </tr>
              <tr>
                <td>┒</td>
                <td>Box Drawings Down Heavy And Left Light</td>
                <td>&amp;#9490;</td>
                <td>&amp;#x2512;</td>
                <td>U+2512</td>
              </tr>
              <tr>
                <td>┗</td>
                <td>Box Drawings Heavy Up And Right</td>
                <td>&amp;#9495;</td>
                <td>&amp;#x2517;</td>
                <td>U+2517</td>
              </tr>
              <tr>
                <td>┑</td>
                <td>Box Drawings Down Light And Left Heavy</td>
                <td>&amp;#9489;</td>
                <td>&amp;#x2511;</td>
                <td>U+2511</td>
              </tr>
              <tr>
                <td>┍</td>
                <td>Box Drawings Down Light And Right Heavy</td>
                <td>&amp;#9485;</td>
                <td>&amp;#x250D;</td>
                <td>U+250D</td>
              </tr>
              <tr>
                <td>┙</td>
                <td>Box Drawings Up Light And Left Heavy</td>
                <td>&amp;#9497;</td>
                <td>&amp;#x2519;</td>
                <td>U+2519</td>
              </tr>
              <tr>
                <td>┏</td>
                <td>Box Drawings Heavy Down And Right</td>
                <td>&amp;#9487;</td>
                <td>&amp;#x250F;</td>
                <td>U+250F</td>
              </tr>
              <tr>
                <td>┛</td>
                <td>Box Drawings Heavy Up And Left</td>
                <td>&amp;#9499;</td>
                <td>&amp;#x251B;</td>
                <td>U+251B</td>
              </tr>
              <tr>
                <td>┎</td>
                <td>Box Drawings Down Heavy And Right Light</td>
                <td>&amp;#9486;</td>
                <td>&amp;#x250E;</td>
                <td>U+250E</td>
              </tr>
              <tr>
                <td>┚</td>
                <td>Box Drawings Up Heavy And Left Light</td>
                <td>&amp;#9498;</td>
                <td>&amp;#x251A;</td>
                <td>U+251A</td>
              </tr>
              <tr>
                <td>┌</td>
                <td>Box Drawings Light Down And Right&nbsp;</td>
                <td>&amp;#9484;</td>
                <td>&amp;#x250C;</td>
                <td>U+250C</td>
              </tr>
              <tr>
                <td>┘</td>
                <td>Box Drawings Light Up And Left</td>
                <td>&amp;#9496;</td>
                <td>&amp;#x2518;</td>
                <td>U+2518</td>
              </tr>
              <tr>
                <td>「</td>
                <td>Left Corner Bracket</td>
                <td>&amp;#12300;</td>
                <td>&amp;#x300C;</td>
                <td>U+300C</td>
              </tr>
              <tr>
                <td>」</td>
                <td>Right Corner Bracket</td>
                <td>&amp;#12301;</td>
                <td>&amp;#x300D;</td>
                <td>U+300D</td>
              </tr>
              <tr>
                <td>『</td>
                <td>Left White Corner Bracket</td>
                <td>&amp;#12302;</td>
                <td>&amp;#x300E;</td>
                <td>U+300E</td>
              </tr>
              <tr>
                <td>』</td>
                <td>Right White Corner Bracket</td>
                <td>&amp;#12303;</td>
                <td>&amp;#x300F;</td>
                <td>U+300F</td>
              </tr>
              <tr>
                <td>˩</td>
                <td>Modifier Letter Extra-Low Tone Bar</td>
                <td>&amp;#745;</td>
                <td>&amp;#x02E9;</td>
                <td>U+02E9</td>
              </tr>
              <tr>
                <td>˥</td>
                <td>Modifier Letter Extra-High Tone Bar</td>
                <td>&amp;#741;</td>
                <td>&amp;#x02E5;</td>
                <td>U+02E5</td>
              </tr>
              <tr>
                <td>├</td>
                <td>Box Drawings Light Vertical And Right</td>
                <td>&amp;#9500;</td>
                <td>&amp;#x251C;</td>
                <td>U+251C</td>
              </tr>
              <tr>
                <td>┝</td>
                <td>Box Drawings Vertical Light And Right Heavy</td>
                <td>&amp;#9501;</td>
                <td>&amp;#x251D;</td>
                <td>U+251D</td>
              </tr>
              <tr>
                <td>┞</td>
                <td>Box Drawings Up Heavy And Right Down Light</td>
                <td>&amp;#9502;</td>
                <td>&amp;#x251E;</td>
                <td>U+251E</td>
              </tr>
              <tr>
                <td>┟</td>
                <td>Box Drawings Down Heavy And Right Up Light</td>
                <td>&amp;#9503;</td>
                <td>&amp;#x251F;</td>
                <td>U+251F</td>
              </tr>
              <tr>
                <td>┠</td>
                <td>Box Drawings Vertical Heavy And Right Light</td>
                <td>&amp;#9504;</td>
                <td>&amp;#x2520;</td>
                <td>U+2520</td>
              </tr>
              <tr>
                <td>┡</td>
                <td>Box Drawings Down Light And Right Up Heavy</td>
                <td>&amp;#9505;</td>
                <td>&amp;#x2521;</td>
                <td>U+2521</td>
              </tr>
              <tr>
                <td>┢</td>
                <td>Box Drawings Up Light And Right Down Heavy</td>
                <td>&amp;#9506;</td>
                <td>&amp;#x2522;</td>
                <td>U+2522</td>
              </tr>
              <tr>
                <td>┣</td>
                <td>Box Drawings Heavy Vertical And Right</td>
                <td>&amp;#9507;</td>
                <td>&amp;#x2523;</td>
                <td>U+2523</td>
              </tr>
              <tr>
                <td>┤</td>
                <td>Box Drawings Light Vertical And Left</td>
                <td>&amp;#9508;</td>
                <td>&amp;#x2524;</td>
                <td>U+2524</td>
              </tr>
              <tr>
                <td>┥</td>
                <td>Box Drawings Vertical Light And Left Heavy</td>
                <td>&amp;#9509;</td>
                <td>&amp;#x2525;</td>
                <td>U+2525</td>
              </tr>
              <tr>
                <td>┦</td>
                <td>Box Drawings Up Heavy And Left Down Light</td>
                <td>&amp;#9510;</td>
                <td>&amp;#x2526;</td>
                <td>U+2526</td>
              </tr>
              <tr>
                <td>┧</td>
                <td>Box Drawings Down Heavy And Left Up Light</td>
                <td>&amp;#9511;</td>
                <td>&amp;#x2527;</td>
                <td>U+2527</td>
              </tr>
              <tr>
                <td>┨</td>
                <td>Box Drawings Vertical Heavy And Left Light</td>
                <td>&amp;#9512;</td>
                <td>&amp;#x2528;</td>
                <td>U+2528</td>
              </tr>
              <tr>
                <td>┩</td>
                <td>Box Drawings Down Light And Left Up Heavy</td>
                <td>&amp;#9513;</td>
                <td>&amp;#x2529;</td>
                <td>U+2529</td>
              </tr>
              <tr>
                <td>┪</td>
                <td>Box Drawings Up Light And Left Down Heavy</td>
                <td>&amp;#9514;</td>
                <td>&amp;#x252A;</td>
                <td>U+252A</td>
              </tr>
              <tr>
                <td>┫</td>
                <td>Box Drawings Heavy Vertical And Left</td>
                <td>&amp;#9515;</td>
                <td>&amp;#x252B;</td>
                <td>U+252B</td>
              </tr>
              <tr>
                <td>┬</td>
                <td>Box Drawings Light Down And Horizontal</td>
                <td>&amp;#9516;</td>
                <td>&amp;#x252C;</td>
                <td>U+252C</td>
              </tr>
              <tr>
                <td>┭</td>
                <td>Box Drawings Left Heavy And Right Down Light</td>
                <td>&amp;#9517;</td>
                <td>&amp;#x252D;</td>
                <td>U+252D</td>
              </tr>
              <tr>
                <td>┮</td>
                <td>Box Drawings Right Heavy And Left Down Light</td>
                <td>&amp;#9518;</td>
                <td>&amp;#x252E;</td>
                <td>U+252E</td>
              </tr>
              <tr>
                <td>┯</td>
                <td>Box Drawings Down Light And Horizontal Heavy</td>
                <td>&amp;#9519;</td>
                <td>&amp;#x252F;</td>
                <td>U+252F</td>
              </tr>
              <tr>
                <td>┰</td>
                <td>Box Drawings Down Heavy And Horizontal Light</td>
                <td>&amp;#9520;</td>
                <td>&amp;#x2530;</td>
                <td>U+2530</td>
              </tr>
              <tr>
                <td>┱</td>
                <td>Box Drawings Right Light And Left Down Heavy</td>
                <td>&amp;#9521;</td>
                <td>&amp;#x2531;</td>
                <td>U+2531</td>
              </tr>
              <tr>
                <td>┲</td>
                <td>Box Drawings Left Light And Right Down Heavy</td>
                <td>&amp;#9522;</td>
                <td>&amp;#x2532;</td>
                <td>U+2532</td>
              </tr>
              <tr>
                <td>┳</td>
                <td>Box Drawings Heavy Down And Horizontal</td>
                <td>&amp;#9523;</td>
                <td>&amp;#x2533;</td>
                <td>U+2533</td>
              </tr>
              <tr>
                <td>┴</td>
                <td>Box Drawings Light Up And Horizontal</td>
                <td>&amp;#9524;</td>
                <td>&amp;#x2534;</td>
                <td>U+2534</td>
              </tr>
              <tr>
                <td>┵</td>
                <td>Box Drawings Left Heavy And Right Up Light</td>
                <td>&amp;#9525;</td>
                <td>&amp;#x2535;</td>
                <td>U+2535</td>
              </tr>
              <tr>
                <td>┶</td>
                <td>Box Drawings Right Heavy And Left Up Light</td>
                <td>&amp;#9526;</td>
                <td>&amp;#x2536;</td>
                <td>U+2536</td>
              </tr>
              <tr>
                <td>┷</td>
                <td>Box Drawings Up Light And Horizontal Heavy</td>
                <td>&amp;#9527;</td>
                <td>&amp;#x2537;</td>
                <td>U+2537</td>
              </tr>
              <tr>
                <td>┸</td>
                <td>Box Drawings Up Heavy And Horizontal Light</td>
                <td>&amp;#9528;</td>
                <td>&amp;#x2538;</td>
                <td>U+2538</td>
              </tr>
              <tr>
                <td>┹</td>
                <td>Box Drawings Right Light And Left Up Heavy</td>
                <td>&amp;#9529;</td>
                <td>&amp;#x2539;</td>
                <td>U+2539</td>
              </tr>
              <tr>
                <td>┺</td>
                <td>Box Drawings Left Light And Right Up Heavy</td>
                <td>&amp;#9530;</td>
                <td>&amp;#x253A;</td>
                <td>U+253A</td>
              </tr>
              <tr>
                <td>┻</td>
                <td>Box Drawings Heavy Up And Horizontal</td>
                <td>&amp;#9531;</td>
                <td>&amp;#x253B;</td>
                <td>U+253B</td>
              </tr>
              <tr>
                <td>┼</td>
                <td>Box Drawings Light Vertical And Horizontal</td>
                <td>&amp;#9532;</td>
                <td>&amp;#x253C;</td>
                <td>U+253C</td>
              </tr>
              <tr>
                <td>┽</td>
                <td>Box Drawings Left Heavy And Right Vertical Light</td>
                <td>&amp;#9533;</td>
                <td>&amp;#x253D;</td>
                <td>U+253D</td>
              </tr>
              <tr>
                <td>┾</td>
                <td>Box Drawings Right Heavy And Left Vertical Light</td>
                <td>&amp;#9534;</td>
                <td>&amp;#x253E;</td>
                <td>U+253E</td>
              </tr>
              <tr>
                <td>┿</td>
                <td>Box Drawings Vertical Light And Horizontal Heavy</td>
                <td>&amp;#9535;</td>
                <td>&amp;#x253F;</td>
                <td>U+253F</td>
              </tr>
              <tr>
                <td>╀</td>
                <td>Box Drawings Up Heavy And Down Horizontal Light</td>
                <td>&amp;#9536;</td>
                <td>&amp;#x2540;</td>
                <td>U+2540</td>
              </tr>
              <tr>
                <td>╁</td>
                <td>Box Drawings Down Heavy And Up Horizontal Light</td>
                <td>&amp;#9537;</td>
                <td>&amp;#x2541;</td>
                <td>U+2541</td>
              </tr>
              <tr>
                <td>╂</td>
                <td>Box Drawings Vertical Heavy And Horizontal Light</td>
                <td>&amp;#9538;</td>
                <td>&amp;#x2542;</td>
                <td>U+2542</td>
              </tr>
              <tr>
                <td>╃</td>
                <td>Box Drawings Left Up Heavy And Right Down Light</td>
                <td>&amp;#9539;</td>
                <td>&amp;#x2543;</td>
                <td>U+2543</td>
              </tr>
              <tr>
                <td>╄</td>
                <td>Box Drawings Right Up Heavy And Left Down Light</td>
                <td>&amp;#9540;</td>
                <td>&amp;#x2544;</td>
                <td>U+2544</td>
              </tr>
              <tr>
                <td>╅</td>
                <td>Box Drawings Left Down Heavy And Right Up Light</td>
                <td>&amp;#9541;</td>
                <td>&amp;#x2545;</td>
                <td>U+2545</td>
              </tr>
              <tr>
                <td>╆</td>
                <td>Box Drawings Right Down Heavy And Left Up Light</td>
                <td>&amp;#9542;</td>
                <td>&amp;#x2546;</td>
                <td>U+2546</td>
              </tr>
              <tr>
                <td>╇</td>
                <td>Box Drawings Down Light And Up Horizontal Heavy</td>
                <td>&amp;#9543;</td>
                <td>&amp;#x2547;</td>
                <td>U+2547</td>
              </tr>
              <tr>
                <td>╈</td>
                <td>Box Drawings Up Light And Down Horizontal Heavy</td>
                <td>&amp;#9544;</td>
                <td>&amp;#x2548;</td>
                <td>U+2548</td>
              </tr>
              <tr>
                <td>╉</td>
                <td>Box Drawings Right Light And Left Vertical Heavy</td>
                <td>&amp;#9545;</td>
                <td>&amp;#x2549;</td>
                <td>U+2549</td>
              </tr>
              <tr>
                <td>╊</td>
                <td>Box Drawings Left Light And Right Vertical Heavy</td>
                <td>&amp;#9546;</td>
                <td>&amp;#x254A;</td>
                <td>U+254A</td>
              </tr>
              <tr>
                <td>╋</td>
                <td>Box Drawings Heavy Vertical And Horizontal</td>
                <td>&amp;#9547;</td>
                <td>&amp;#x254B;</td>
                <td>U+254B</td>
              </tr>
              <tr>
                <td>╒</td>
                <td>Box Drawings Down Single And Right Double</td>
                <td>&amp;#9554;</td>
                <td>&amp;#x2552;</td>
                <td>U+2552</td>
              </tr>
              <tr>
                <td>╕</td>
                <td>Box Drawings Down Single And Left Double&nbsp;</td>
                <td>&amp;#9557;</td>
                <td>&amp;#x2555;</td>
                <td>U+2555</td>
              </tr>
              <tr>
                <td>╓</td>
                <td>Box Drawings Down Double And Right Single</td>
                <td>&amp;#9555;</td>
                <td>&amp;#x2553;</td>
                <td>U+2553</td>
              </tr>
              <tr>
                <td>╖</td>
                <td>Box Drawings Down Double And Left Single</td>
                <td>&amp;#9558;</td>
                <td>&amp;#x2556;</td>
                <td>U+2556</td>
              </tr>
              <tr>
                <td>╔</td>
                <td>Box Drawings Double Down And Right</td>
                <td>&amp;#9556;</td>
                <td>&amp;#x2554;</td>
                <td>U+2554</td>
              </tr>
              <tr>
                <td>╗</td>
                <td>Box Drawings Double Down And Left</td>
                <td>&amp;#9559;</td>
                <td>&amp;#x2557;</td>
                <td>U+2557</td>
              </tr>
              <tr>
                <td>╘</td>
                <td>Box Drawings Up Single And Right Double</td>
                <td>&amp;#9560;</td>
                <td>&amp;#x2558;</td>
                <td>U+2558</td>
              </tr>
              <tr>
                <td>╛</td>
                <td>Box Drawings Up Single And Left Double</td>
                <td>&amp;#9563;</td>
                <td>&amp;#x255B;</td>
                <td>U+255B</td>
              </tr>
              <tr>
                <td>╙</td>
                <td>Box Drawings Up Double And Right Single</td>
                <td>&amp;#9561;</td>
                <td>&amp;#x2559;</td>
                <td>U+2559</td>
              </tr>
              <tr>
                <td>╜</td>
                <td>Box Drawings Up Double And Left Single</td>
                <td>&amp;#9564;</td>
                <td>&amp;#x255C;</td>
                <td>U+255C</td>
              </tr>
              <tr>
                <td>╚</td>
                <td>Box Drawings Double Up And Right</td>
                <td>&amp;#9562;</td>
                <td>&amp;#x255A;</td>
                <td>U+255A</td>
              </tr>
              <tr>
                <td>╝</td>
                <td>Box Drawings Double Up And Left</td>
                <td>&amp;#9565;</td>
                <td>&amp;#x255D;</td>
                <td>U+255D</td>
              </tr>
              <tr>
                <td>╞</td>
                <td>Box Drawings Vertical Single And Right Double</td>
                <td>&amp;#9566;</td>
                <td>&amp;#x255E;</td>
                <td>U+255E</td>
              </tr>
              <tr>
                <td>╡</td>
                <td>Box Drawings Vertical Single And Left Double</td>
                <td>&amp;#9569;</td>
                <td>&amp;#x2561;</td>
                <td>U+2561</td>
              </tr>
              <tr>
                <td>╟</td>
                <td>Box Drawings Vertical Double And Right Single</td>
                <td>&amp;#9567;</td>
                <td>&amp;#x255F;</td>
                <td>U+255F</td>
              </tr>
              <tr>
                <td>╢</td>
                <td>Box Drawings Vertical Double And Left Single</td>
                <td>&amp;#9570;</td>
                <td>&amp;#x2562;</td>
                <td>U+2562</td>
              </tr>
              <tr>
                <td>╠</td>
                <td>Box Drawings Double Vertical And Right</td>
                <td>&amp;#9568;</td>
                <td>&amp;#x2560;</td>
                <td>U+2560</td>
              </tr>
              <tr>
                <td>╣</td>
                <td>Box Drawings Double Vertical And Left&nbsp;</td>
                <td>&amp;#9571;</td>
                <td>&amp;#x2563;</td>
                <td>U+2563</td>
              </tr>
              <tr>
                <td>╥</td>
                <td>Box Drawings Down Double And Horizontal Single</td>
                <td>&amp;#9573;</td>
                <td>&amp;#x2565;</td>
                <td>U+2565</td>
              </tr>
              <tr>
                <td>╨</td>
                <td>Box Drawings Up Double And Horizontal Single</td>
                <td>&amp;#9576;</td>
                <td>&amp;#x2568;</td>
                <td>U+2568</td>
              </tr>
              <tr>
                <td>╧</td>
                <td>Box Drawings Up Single And Horizontal Double</td>
                <td>&amp;#9575;</td>
                <td>&amp;#x2567;</td>
                <td>U+2567</td>
              </tr>
              <tr>
                <td>╤</td>
                <td>Box Drawings Down Single And Horizontal Double</td>
                <td>&amp;#9572;</td>
                <td>&amp;#x2564;</td>
                <td>U+2564</td>
              </tr>
              <tr>
                <td>╦</td>
                <td>Box Drawings Double Down And Horizontal</td>
                <td>&amp;#9574;</td>
                <td>&amp;#x2566;</td>
                <td>U+2566</td>
              </tr>
              <tr>
                <td>╩</td>
                <td>Box Drawings Double Up And Horizontal</td>
                <td>&amp;#9577;</td>
                <td>&amp;#x2569;</td>
                <td>U+2569</td>
              </tr>
              <tr>
                <td>╪</td>
                <td>Box Drawings Vertical Single And Horizontal Double</td>
                <td>&amp;#9578;</td>
                <td>&amp;#x256A;</td>
                <td>U+256A</td>
              </tr>
              <tr>
                <td>╫</td>
                <td>Box Drawings Vertical Double And Horizontal Single</td>
                <td>&amp;#9579;</td>
                <td>&amp;#x256B;</td>
                <td>U+256B</td>
              </tr>
              <tr>
                <td>╬</td>
                <td>Box Drawings Double Vertical And Horizontal</td>
                <td>&amp;#9580;</td>
                <td>&amp;#x256C;</td>
                <td>U+256C</td>
              </tr>
              <tr>
                <td>〒</td>
                <td>Postal Mark</td>
                <td>&amp;#12306;</td>
                <td>&amp;#x3012;</td>
                <td>U+3012</td>
              </tr>
              <tr>
                <td>⊢</td>
                <td>Right Tack</td>
                <td>&amp;#8866;</td>
                <td>&amp;#x22A2;</td>
                <td>U+22A2</td>
              </tr>
              <tr>
                <td>⊣</td>
                <td>Left Tack&nbsp;</td>
                <td>&amp;#8867;</td>
                <td>&amp;#x22A3;</td>
                <td>U+22A3</td>
              </tr>
              <tr>
                <td>⊤</td>
                <td>Down Tack</td>
                <td>&amp;#8868;</td>
                <td>&amp;#x22A4;</td>
                <td>U+22A4</td>
              </tr>
              <tr>
                <td>⊥</td>
                <td>Up Tack</td>
                <td>&amp;#8869;</td>
                <td>&amp;#x22A5;</td>
                <td>U+22A5</td>
              </tr>
              <tr>
                <td>╭</td>
                <td>Box Drawings Light Arc Down And Right</td>
                <td>&amp;#9581;</td>
                <td>&amp;#x256D;</td>
                <td>U+256D</td>
              </tr>
              <tr>
                <td>╮</td>
                <td>Box Drawings Light Arc Down And Left</td>
                <td>&amp;#9582;</td>
                <td>&amp;#x256E;</td>
                <td>U+256E</td>
              </tr>
              <tr>
                <td>╯</td>
                <td>Box Drawings Light Arc Up And Left&nbsp;</td>
                <td>&amp;#9583;</td>
                <td>&amp;#x256F;</td>
                <td>U+256F</td>
              </tr>
              <tr>
                <td>╰</td>
                <td>Box Drawings Light Arc Up And Right&nbsp;</td>
                <td>&amp;#9584;</td>
                <td>&amp;#x2570;</td>
                <td>U+2570</td>
              </tr>
              <tr>
                <td>⊦</td>
                <td>Assertion</td>
                <td>&amp;#8870;</td>
                <td>&amp;#x22A6;</td>
                <td>U+22A6</td>
              </tr>
              <tr>
                <td>⊧</td>
                <td>Models&nbsp;</td>
                <td>&amp;#8871;</td>
                <td>&amp;#x22A7;</td>
                <td>U+22A7</td>
              </tr>
              <tr>
                <td>⊨</td>
                <td>True</td>
                <td>&amp;#8872;</td>
                <td>&amp;#x22A8;</td>
                <td>U+22A8</td>
              </tr>
              <tr>
                <td>⊩</td>
                <td>Forces</td>
                <td>&amp;#8873;</td>
                <td>&amp;#x22A9;</td>
                <td>U+22A9</td>
              </tr>
              <tr>
                <td>⊪</td>
                <td>Triple Vertical Bar Right Turnstile</td>
                <td>&amp;#8874;</td>
                <td>&amp;#x22AA;</td>
                <td>U+22AA</td>
              </tr>
              <tr>
                <td>⊫</td>
                <td>Double Vertical Bar Double Right Turnstile</td>
                <td>&amp;#8875;</td>
                <td>&amp;#x22AB;</td>
                <td>U+22AB</td>
              </tr>
              <tr>
                <td>⊬</td>
                <td>Does Not Prove</td>
                <td>&amp;#8876;</td>
                <td>&amp;#x22AC;</td>
                <td>U+22AC</td>
              </tr>
              <tr>
                <td>⊭</td>
                <td>Not True</td>
                <td>&amp;#8877;</td>
                <td>&amp;#x22AD;</td>
                <td>U+22AD</td>
              </tr>
              <tr>
                <td>⊮</td>
                <td>Does Not Force</td>
                <td>&amp;#8878;</td>
                <td>&amp;#x22AE;</td>
                <td>U+22AE</td>
              </tr>
              <tr>
                <td>⊯</td>
                <td>Negated Double Vertical Bar Double Right Turnstile</td>
                <td>&amp;#8879;</td>
                <td>&amp;#x22AF;</td>
                <td>U+22AF</td>
              </tr>
              <tr>
                <td>⊺</td>
                <td>Intercalate</td>
                <td>&amp;#8890;</td>
                <td>&amp;#x22BA;</td>
                <td>U+22BA</td>
              </tr>
              <tr>
                <td>〦</td>
                <td>Hangzhou Numeral Six</td>
                <td>&amp;#12326;</td>
                <td>&amp;#x3026;</td>
                <td>U+3026</td>
              </tr>
              <tr>
                <td>〧</td>
                <td>Hangzhou Numeral Seven</td>
                <td>&amp;#12327;</td>
                <td>&amp;#x3027;</td>
                <td>U+3027</td>
              </tr>
              <tr>
                <td>〨</td>
                <td>Hangzhou Numeral Eight&nbsp;</td>
                <td>&amp;#12328;</td>
                <td>&amp;#x3028;</td>
                <td>U+3028</td>
              </tr>
              <tr>
                <td>˦</td>
                <td>Modifier Letter High Tone Bar</td>
                <td>&amp;#742;</td>
                <td>&amp;#x02E6;</td>
                <td>U+02E6</td>
              </tr>
              <tr>
                <td>˧</td>
                <td>Modifier Letter Mid Tone Bar</td>
                <td>&amp;#743;</td>
                <td>&amp;#x02E7;</td>
                <td>U+02E7</td>
              </tr>
              <tr>
                <td>˨</td>
                <td>Modifier Letter Low Tone Bar</td>
                <td>&amp;#744;</td>
                <td>&amp;#x02E8;</td>
                <td>U+02E8</td>
              </tr>
              <tr>
                <td>⑁</td>
                <td>Ocr Chair</td>
                <td>&amp;#9281;</td>
                <td>&amp;#x2441;</td>
                <td>U+2441</td>
              </tr>
              <tr>
                <td>⑂</td>
                <td>Ocr Fork</td>
                <td>&amp;#9282;</td>
                <td>&amp;#x2442;</td>
                <td>U+2442</td>
              </tr>
              <tr>
                <td>⑃</td>
                <td>Ocr Inverted Fork</td>
                <td>&amp;#9283;</td>
                <td>&amp;#x2443;</td>
                <td>U+2443</td>
              </tr>
              <tr>
                <td>∟</td>
                <td>Right Angle</td>
                <td>&amp;#8735;</td>
                <td>&amp;#x221F;</td>
                <td>U+221F</td>
              </tr>
            </tbody></table>
        </div>
      </div>


    </>
  )
}

