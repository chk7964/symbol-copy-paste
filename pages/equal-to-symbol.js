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

  const handleClick = () => {
    var Text = document.querySelector('#text').value;
    var repeats = document.querySelector('#number').value;
    var i = 1;
    for (i = 1; i <= repeats; i++) {
      document.querySelector("#text1").value += Text + "\n";
    };
    document.querySelector('#repeatButton1').setAttribute("disabled", true);
    document.querySelector('#repeatButton2').setAttribute("disabled", true);
    document.querySelector('#repeatButton1').innerHTML = 'Repeated';
  }

  const handleClick1 = () => {
    var Text = document.querySelector('#text').value;
    var repeats = document.querySelector('#number').value;
    var i = 1;
    for (i = 1; i <= repeats; i++) {
      document.getElementById("text1").value += Text + " ";
    };
    document.getElementById("repeatButton2").disabled = true;
    document.getElementById("repeatButton1").disabled = true;
    document.getElementById("repeatButton2").innerHTML = "Repeated";
  }

  const reset = (e) => {
    document.querySelector('#repeatButton1').removeAttribute("disabled");
    document.querySelector('#repeatButton2').removeAttribute("disabled");
    document.querySelector('#repeatButton1').innerHTML = "Repeat (New Line)"
    document.querySelector('#repeatButton2').innerHTML = 'Repeat (Same Line)';
    document.querySelector("#text").value = "";
    document.querySelector("#text1").value = "";
    document.querySelector("#number").value = "";
  }

  // const btest = () => {
  //   alert("Great Shot!");
  // }
  // function createMarkup() { return {__html: 'lorem <b>ipsum</b>'}; };

  const btest = (event) => {

    // let test = document.getElementById('banner').innerHTML;
    //   alert(test);

  }
  return (
    <>
      <NextSeo
        title="Equal To Symbol  [Copy And Paste]"
        description="Free Repeat Text Generator - Copy & Paste | Download And Print Any Typed Text, leeter, Words, Sentense And phrases."
      />
      <ToastContainer />



      <div className='p-4  '>
        <p>You can copy Equal symbol.</p>
        <div className="area" >
          <span className="bt" onClick={copy} data-clipboard-text="	=	">	=	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⁼	">	⁼	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	₌	">	₌	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	꞊	">	꞊	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	﹦	">	﹦	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	＝	">	＝	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	≃	">	≃	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	≄	">	≄	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	≅	">	≅	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	≆	">	≆	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	≇	">	≇	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	≈	">	≈	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	≉	">	≉	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	≊	">	≊	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	≌	">	≌	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	≑	">	≑	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	≒	">	≒	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	≓	">	≓	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	≔	">	≔	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	≕	">	≕	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	≖	">	≖	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	≗	">	≗	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	≛	">	≛	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	≜	">	≜	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	≝	">	≝	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	≟	">	≟	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	≠	">	≠	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	≤	">	≤	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	≥	">	≥	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	≦	">	≦	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	≧	">	≧	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	≨	">	≨	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	≩	">	≩	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	≰	">	≰	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	≱	">	≱	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	≼	">	≼	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	≽	">	≽	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⊆	">	⊆	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⊇	">	⊇	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⊈	">	⊈	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⊉	">	⊉	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⊊	">	⊊	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⊋	">	⊋	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⊑	">	⊑	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⊒	">	⊒	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⊜	">	⊜	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⊴	">	⊴	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⊵	">	⊵	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⋍	">	⋍	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⋕	">	⋕	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⋚	">	⋚	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⋛	">	⋛	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⋜	">	⋜	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⋝	">	⋝	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⋞	">	⋞	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⋟	">	⋟	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⋠	">	⋠	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⋡	">	⋡	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⋢	">	⋢	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⋣	">	⋣	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⋤	">	⋤	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⋥	">	⋥	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⋬	">	⋬	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⋭	">	⋭	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⌸	">	⌸	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⍯	">	⍯	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⥱	">	⥱	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⥵	">	⥵	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⧣	">	⧣	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⧤	">	⧤	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⩦	">	⩦	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⩮	">	⩮	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⩯	">	⩯	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⩰	">	⩰	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⩱	">	⩱	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⩲	">	⩲	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⩳	">	⩳	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⩴	">	⩴	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⩵	">	⩵	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⩶	">	⩶	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⩷	">	⩷	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⩽	">	⩽	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⩾	">	⩾	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⩿	">	⩿	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪀	">	⪀	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪁	">	⪁	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪂	">	⪂	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪃	">	⪃	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪄	">	⪄	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪇	">	⪇	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪈	">	⪈	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪋	">	⪋	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪌	">	⪌	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪍	">	⪍	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪎	">	⪎	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪑	">	⪑	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪒	">	⪒	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪓	">	⪓	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪔	">	⪔	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪕	">	⪕	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪖	">	⪖	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪗	">	⪗	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪘	">	⪘	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪙	">	⪙	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪚	">	⪚	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪛	">	⪛	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪜	">	⪜	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪟	">	⪟	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪠	">	⪠	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪨	">	⪨	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪩	">	⪩	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪬	">	⪬	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪭	">	⪭	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪮	">	⪮	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪯	">	⪯	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪰	">	⪰	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪱	">	⪱	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪲	">	⪲	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪳	">	⪳	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪴	">	⪴	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪵	">	⪵	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪶	">	⪶	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪷	">	⪷	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪸	">	⪸	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪹	">	⪹	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⪺	">	⪺	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⫃	">	⫃	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⫄	">	⫄	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⫅	">	⫅	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⫆	">	⫆	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⫉	">	⫉	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⫊	">	⫊	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⫋	">	⫋	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⫌	">	⫌	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⫑	">	⫑	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⫒	">	⫒	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⫹	">	⫹	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⫺	">	⫺	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⭀	">	⭀	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⭂	">	⭂	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⭈	">	⭈	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⭊	">	⭊	</span></div>
        <br />
        <table>
          <thead><tr><th>Equal To Symbol</th><th>Symbol Name</th><th>Dec Code</th><th>Hex Code</th><th>Unicode</th></tr></thead>
          <tbody>
            <tr>
              <td>=</td>
              <td>Equals Sign</td>
              <td>&amp;#61;</td>
              <td>&amp;#x003D;</td>
              <td>U+003D</td>
            </tr>
            <tr>
              <td>⁼</td>
              <td>Superscript Equals Sign</td>
              <td>&amp;#8316;</td>
              <td>&amp;#x207C;</td>
              <td>U+207C</td>
            </tr>
            <tr>
              <td>₌</td>
              <td>Subscript Equals Sign</td>
              <td>&amp;#8332;</td>
              <td>&amp;#x208C;</td>
              <td>U+208C</td>
            </tr>
            <tr>
              <td>꞊</td>
              <td>Modifier Letter Short Equals Sign</td>
              <td>&amp;#42890;</td>
              <td>&amp;#xA78A;</td>
              <td>U+A78A</td>
            </tr>
            <tr>
              <td>﹦</td>
              <td>Small Equals Sign</td>
              <td>&amp;#65126;</td>
              <td>&amp;#xFE66;</td>
              <td>U+FE66</td>
            </tr>
            <tr>
              <td>＝</td>
              <td>Fullwidth Equals Sign</td>
              <td>&amp;#65309;</td>
              <td>&amp;#xFF1D;</td>
              <td>U+FF1D</td>
            </tr>
            <tr>
              <td>≃</td>
              <td>Asymptotically Equal To</td>
              <td>&amp;#8771;</td>
              <td>&amp;#x2243;</td>
              <td>U+2243</td>
            </tr>
            <tr>
              <td>≄</td>
              <td>Not Asymptotically Equal To</td>
              <td>&amp;#8772;</td>
              <td>&amp;#x2244;</td>
              <td>U+2244</td>
            </tr>
            <tr>
              <td>≅</td>
              <td>Approximately Equal To</td>
              <td>&amp;#8773;</td>
              <td>&amp;#x2245;</td>
              <td>U+2245</td>
            </tr>
            <tr>
              <td>≆</td>
              <td>Approximately But Not Actually Equal To</td>
              <td>&amp;#8774;</td>
              <td>&amp;#x2246;</td>
              <td>U+2246</td>
            </tr>
            <tr>
              <td>≇</td>
              <td>Neither Approximately Nor Actually Equal To</td>
              <td>&amp;#8775;</td>
              <td>&amp;#x2247;</td>
              <td>U+2247</td>
            </tr>
            <tr>
              <td>≈</td>
              <td>Almost Equal To</td>
              <td>&amp;#8776;</td>
              <td>&amp;#x2248;</td>
              <td>U+2248</td>
            </tr>
            <tr>
              <td>≉</td>
              <td>Not Almost Equal To</td>
              <td>&amp;#8777;</td>
              <td>&amp;#x2249;</td>
              <td>U+2249</td>
            </tr>
            <tr>
              <td>≊</td>
              <td>Almost Equal or Equal To</td>
              <td>&amp;#8778;</td>
              <td>&amp;#x224A;</td>
              <td>U+224A</td>
            </tr>
            <tr>
              <td>≌</td>
              <td>All Equal To</td>
              <td>&amp;#8780;</td>
              <td>&amp;#x224C;</td>
              <td>U+224C</td>
            </tr>
            <tr>
              <td>≑</td>
              <td>Geometrically Equal To</td>
              <td>&amp;#8785;</td>
              <td>&amp;#x2251;</td>
              <td>U+2251</td>
            </tr>
            <tr>
              <td>≒</td>
              <td>Approximately Equal to or the Image Of</td>
              <td>&amp;#8786;</td>
              <td>&amp;#x2252;</td>
              <td>U+2252</td>
            </tr>
            <tr>
              <td>≓</td>
              <td>Image of or Approximately Equal To</td>
              <td>&amp;#8787;</td>
              <td>&amp;#x2253;</td>
              <td>U+2253</td>
            </tr>
            <tr>
              <td>≔</td>
              <td>Colon Equals</td>
              <td>&amp;#8788;</td>
              <td>&amp;#x2254;</td>
              <td>U+2254</td>
            </tr>
            <tr>
              <td>≕</td>
              <td>Equals Colon</td>
              <td>&amp;#8789;</td>
              <td>&amp;#x2255;</td>
              <td>U+2255</td>
            </tr>
            <tr>
              <td>≖</td>
              <td>Ring In Equal To</td>
              <td>&amp;#8790;</td>
              <td>&amp;#x2256;</td>
              <td>U+2256</td>
            </tr>
            <tr>
              <td>≗</td>
              <td>Ring Equal To</td>
              <td>&amp;#8791;</td>
              <td>&amp;#x2257;</td>
              <td>U+2257</td>
            </tr>
            <tr>
              <td>≛</td>
              <td>Star Equals</td>
              <td>&amp;#8795;</td>
              <td>&amp;#x225B;</td>
              <td>U+225B</td>
            </tr>
            <tr>
              <td>≜</td>
              <td>Delta Equal To</td>
              <td>&amp;#8796;</td>
              <td>&amp;#x225C;</td>
              <td>U+225C</td>
            </tr>
            <tr>
              <td>≝</td>
              <td>Equal to By Definition</td>
              <td>&amp;#8797;</td>
              <td>&amp;#x225D;</td>
              <td>U+225D</td>
            </tr>
            <tr>
              <td>≟</td>
              <td>Questioned Equal To</td>
              <td>&amp;#8799;</td>
              <td>&amp;#x225F;</td>
              <td>U+225F</td>
            </tr>
            <tr>
              <td>≠</td>
              <td>Not Equal To</td>
              <td>&amp;#8800;</td>
              <td>&amp;#x2260;</td>
              <td>U+2260</td>
            </tr>
            <tr>
              <td>≤</td>
              <td>Less-Than or Equal To</td>
              <td>&amp;#8804;</td>
              <td>&amp;#x2264;</td>
              <td>U+2264</td>
            </tr>
            <tr>
              <td>≥</td>
              <td>Greater-Than or Equal To</td>
              <td>&amp;#8805;</td>
              <td>&amp;#x2265;</td>
              <td>U+2265</td>
            </tr>
            <tr>
              <td>≦</td>
              <td>Less-Than Over Equal To</td>
              <td>&amp;#8806;</td>
              <td>&amp;#x2266;</td>
              <td>U+2266</td>
            </tr>
            <tr>
              <td>≧</td>
              <td>Greater-Than Over Equal To</td>
              <td>&amp;#8807;</td>
              <td>&amp;#x2267;</td>
              <td>U+2267</td>
            </tr>
            <tr>
              <td>≨</td>
              <td>Less-Than But Not Equal To</td>
              <td>&amp;#8808;</td>
              <td>&amp;#x2268;</td>
              <td>U+2268</td>
            </tr>
            <tr>
              <td>≩</td>
              <td>Greater-Than But Not Equal To</td>
              <td>&amp;#8809;</td>
              <td>&amp;#x2269;</td>
              <td>U+2269</td>
            </tr>
            <tr>
              <td>≰</td>
              <td>Neither Less-Than Nor Equal To</td>
              <td>&amp;#8816;</td>
              <td>&amp;#x2270;</td>
              <td>U+2270</td>
            </tr>
            <tr>
              <td>≱</td>
              <td>Neither Greater-Than Nor Equal To</td>
              <td>&amp;#8817;</td>
              <td>&amp;#x2271;</td>
              <td>U+2271</td>
            </tr>
            <tr>
              <td>≼</td>
              <td>Precedes or Equal To</td>
              <td>&amp;#8828;</td>
              <td>&amp;#x227C;</td>
              <td>U+227C</td>
            </tr>
            <tr>
              <td>≽</td>
              <td>Succeeds or Equal To</td>
              <td>&amp;#8829;</td>
              <td>&amp;#x227D;</td>
              <td>U+227D</td>
            </tr>
            <tr>
              <td>⊆</td>
              <td>Subset of or Equal To</td>
              <td>&amp;#8838;</td>
              <td>&amp;#x2286;</td>
              <td>U+2286</td>
            </tr>
            <tr>
              <td>⊇</td>
              <td>Superset of or Equal To</td>
              <td>&amp;#8839;</td>
              <td>&amp;#x2287;</td>
              <td>U+2287</td>
            </tr>
            <tr>
              <td>⊈</td>
              <td>Neither A Subset of Nor Equal To</td>
              <td>&amp;#8840;</td>
              <td>&amp;#x2288;</td>
              <td>U+2288</td>
            </tr>
            <tr>
              <td>⊉</td>
              <td>Neither A Superset of Nor Equal To</td>
              <td>&amp;#8841;</td>
              <td>&amp;#x2289;</td>
              <td>U+2289</td>
            </tr>
            <tr>
              <td>⊊</td>
              <td>Subset of with Not Equal To</td>
              <td>&amp;#8842;</td>
              <td>&amp;#x228A;</td>
              <td>U+228A</td>
            </tr>
            <tr>
              <td>⊋</td>
              <td>Superset of with Not Equal To</td>
              <td>&amp;#8843;</td>
              <td>&amp;#x228B;</td>
              <td>U+228B</td>
            </tr>
            <tr>
              <td>⊑</td>
              <td>Square Image of or Equal To</td>
              <td>&amp;#8849;</td>
              <td>&amp;#x2291;</td>
              <td>U+2291</td>
            </tr>
            <tr>
              <td>⊒</td>
              <td>Square Original of or Equal To</td>
              <td>&amp;#8850;</td>
              <td>&amp;#x2292;</td>
              <td>U+2292</td>
            </tr>
            <tr>
              <td>⊜</td>
              <td>Circled Equals</td>
              <td>&amp;#8860;</td>
              <td>&amp;#x229C;</td>
              <td>U+229C</td>
            </tr>
            <tr>
              <td>⊴</td>
              <td>Normal Subgroup of or Equal To</td>
              <td>&amp;#8884;</td>
              <td>&amp;#x22B4;</td>
              <td>U+22B4</td>
            </tr>
            <tr>
              <td>⊵</td>
              <td>Contains as Normal Subgroup or Equal To</td>
              <td>&amp;#8885;</td>
              <td>&amp;#x22B5;</td>
              <td>U+22B5</td>
            </tr>
            <tr>
              <td>⋍</td>
              <td>Reversed Tilde Equals</td>
              <td>&amp;#8909;</td>
              <td>&amp;#x22CD;</td>
              <td>U+22CD</td>
            </tr>
            <tr>
              <td>⋕</td>
              <td>Equal and Parallel To</td>
              <td>&amp;#8917;</td>
              <td>&amp;#x22D5;</td>
              <td>U+22D5</td>
            </tr>
            <tr>
              <td>⋚</td>
              <td>Less-Than Equal to or Greater-Than</td>
              <td>&amp;#8922;</td>
              <td>&amp;#x22DA;</td>
              <td>U+22DA</td>
            </tr>
            <tr>
              <td>⋛</td>
              <td>Greater-Than Equal to or Less-Than</td>
              <td>&amp;#8923;</td>
              <td>&amp;#x22DB;</td>
              <td>U+22DB</td>
            </tr>
            <tr>
              <td>⋜</td>
              <td>Equal to or Less-Than</td>
              <td>&amp;#8924;</td>
              <td>&amp;#x22DC;</td>
              <td>U+22DC</td>
            </tr>
            <tr>
              <td>⋝</td>
              <td>Equal to or Greater-Than</td>
              <td>&amp;#8925;</td>
              <td>&amp;#x22DD;</td>
              <td>U+22DD</td>
            </tr>
            <tr>
              <td>⋞</td>
              <td>Equal to or Precedes</td>
              <td>&amp;#8926;</td>
              <td>&amp;#x22DE;</td>
              <td>U+22DE</td>
            </tr>
            <tr>
              <td>⋟</td>
              <td>Equal to or Succeeds</td>
              <td>&amp;#8927;</td>
              <td>&amp;#x22DF;</td>
              <td>U+22DF</td>
            </tr>
            <tr>
              <td>⋠</td>
              <td>Does Not Precede or Equal</td>
              <td>&amp;#8928;</td>
              <td>&amp;#x22E0;</td>
              <td>U+22E0</td>
            </tr>
            <tr>
              <td>⋡</td>
              <td>Does Not Succeed or Equal</td>
              <td>&amp;#8929;</td>
              <td>&amp;#x22E1;</td>
              <td>U+22E1</td>
            </tr>
            <tr>
              <td>⋢</td>
              <td>Not Square Image of or Equal To</td>
              <td>&amp;#8930;</td>
              <td>&amp;#x22E2;</td>
              <td>U+22E2</td>
            </tr>
            <tr>
              <td>⋣</td>
              <td>Not Square Original of or Equal To</td>
              <td>&amp;#8931;</td>
              <td>&amp;#x22E3;</td>
              <td>U+22E3</td>
            </tr>
            <tr>
              <td>⋤</td>
              <td>Square Image of or Not Equal To</td>
              <td>&amp;#8932;</td>
              <td>&amp;#x22E4;</td>
              <td>U+22E4</td>
            </tr>
            <tr>
              <td>⋥</td>
              <td>Square Original of or Not Equal To</td>
              <td>&amp;#8933;</td>
              <td>&amp;#x22E5;</td>
              <td>U+22E5</td>
            </tr>
            <tr>
              <td>⋬</td>
              <td>Not Normal Subgroup of or Equal To</td>
              <td>&amp;#8940;</td>
              <td>&amp;#x22EC;</td>
              <td>U+22EC</td>
            </tr>
            <tr>
              <td>⋭</td>
              <td>Does Not Contain as Normal Subgroup or Equal</td>
              <td>&amp;#8941;</td>
              <td>&amp;#x22ED;</td>
              <td>U+22ED</td>
            </tr>
            <tr>
              <td>⌸</td>
              <td>APL Functional Symbol Quad Equal</td>
              <td>&amp;#9016;</td>
              <td>&amp;#x2338;</td>
              <td>U+2338</td>
            </tr>
            <tr>
              <td>⍯</td>
              <td>APL Functional Symbol Quad Not Equal</td>
              <td>&amp;#9071;</td>
              <td>&amp;#x236F;</td>
              <td>U+236F</td>
            </tr>
            <tr>
              <td>⥱</td>
              <td>Equals Sign Above Rightwards Arrow</td>
              <td>&amp;#10609;</td>
              <td>&amp;#x2971;</td>
              <td>U+2971</td>
            </tr>
            <tr>
              <td>⥵</td>
              <td>Rightwards Arrow Above Almost Equal To</td>
              <td>&amp;#10613;</td>
              <td>&amp;#x2975;</td>
              <td>U+2975</td>
            </tr>
            <tr>
              <td>⧣</td>
              <td>Equals Sign and Slanted Parallel</td>
              <td>&amp;#10723;</td>
              <td>&amp;#x29E3;</td>
              <td>U+29E3</td>
            </tr>
            <tr>
              <td>⧤</td>
              <td>Equals Sign and Slanted Parallel with Tilde Above</td>
              <td>&amp;#10724;</td>
              <td>&amp;#x29E4;</td>
              <td>U+29E4</td>
            </tr>
            <tr>
              <td>⩦</td>
              <td>Equals Sign with Dot Below</td>
              <td>&amp;#10854;</td>
              <td>&amp;#x2A66;</td>
              <td>U+2A66</td>
            </tr>
            <tr>
              <td>⩮</td>
              <td>Equals with Asterisk</td>
              <td>&amp;#10862;</td>
              <td>&amp;#x2A6E;</td>
              <td>U+2A6E</td>
            </tr>
            <tr>
              <td>⩯</td>
              <td>Almost Equal to with Circumflex Accent</td>
              <td>&amp;#10863;</td>
              <td>&amp;#x2A6F;</td>
              <td>U+2A6F</td>
            </tr>
            <tr>
              <td>⩰</td>
              <td>Approximately Equal or Equal To</td>
              <td>&amp;#10864;</td>
              <td>&amp;#x2A70;</td>
              <td>U+2A70</td>
            </tr>
            <tr>
              <td>⩱</td>
              <td>Equals Sign Above Plus Sign</td>
              <td>&amp;#10865;</td>
              <td>&amp;#x2A71;</td>
              <td>U+2A71</td>
            </tr>
            <tr>
              <td>⩲</td>
              <td>Plus Sign Above Equals Sign</td>
              <td>&amp;#10866;</td>
              <td>&amp;#x2A72;</td>
              <td>U+2A72</td>
            </tr>
            <tr>
              <td>⩳</td>
              <td>Equals Sign Above Tilde Operator</td>
              <td>&amp;#10867;</td>
              <td>&amp;#x2A73;</td>
              <td>U+2A73</td>
            </tr>
            <tr>
              <td>⩴</td>
              <td>Double Colon Equal</td>
              <td>&amp;#10868;</td>
              <td>&amp;#x2A74;</td>
              <td>U+2A74</td>
            </tr>
            <tr>
              <td>⩵</td>
              <td>Two Consecutive Equals Signs</td>
              <td>&amp;#10869;</td>
              <td>&amp;#x2A75;</td>
              <td>U+2A75</td>
            </tr>
            <tr>
              <td>⩶</td>
              <td>Three Consecutive Equals Signs</td>
              <td>&amp;#10870;</td>
              <td>&amp;#x2A76;</td>
              <td>U+2A76</td>
            </tr>
            <tr>
              <td>⩷</td>
              <td>Equals Sign with Two Dots Above and Two Dots Below</td>
              <td>&amp;#10871;</td>
              <td>&amp;#x2A77;</td>
              <td>U+2A77</td>
            </tr>
            <tr>
              <td>⩽</td>
              <td>Less-Than or Slanted Equal To</td>
              <td>&amp;#10877;</td>
              <td>&amp;#x2A7D;</td>
              <td>U+2A7D</td>
            </tr>
            <tr>
              <td>⩾</td>
              <td>Greater-Than or Slanted Equal To</td>
              <td>&amp;#10878;</td>
              <td>&amp;#x2A7E;</td>
              <td>U+2A7E</td>
            </tr>
            <tr>
              <td>⩿</td>
              <td>Less-Than or Slanted Equal to with Dot Inside</td>
              <td>&amp;#10879;</td>
              <td>&amp;#x2A7F;</td>
              <td>U+2A7F</td>
            </tr>
            <tr>
              <td>⪀</td>
              <td>Greater-Than or Slanted Equal to with Dot Inside</td>
              <td>&amp;#10880;</td>
              <td>&amp;#x2A80;</td>
              <td>U+2A80</td>
            </tr>
            <tr>
              <td>⪁</td>
              <td>Less-Than or Slanted Equal to with Dot Above</td>
              <td>&amp;#10881;</td>
              <td>&amp;#x2A81;</td>
              <td>U+2A81</td>
            </tr>
            <tr>
              <td>⪂</td>
              <td>Greater-Than or Slanted Equal to with Dot Above</td>
              <td>&amp;#10882;</td>
              <td>&amp;#x2A82;</td>
              <td>U+2A82</td>
            </tr>
            <tr>
              <td>⪃</td>
              <td>Less-Than or Slanted Equal to with Dot Above Right</td>
              <td>&amp;#10883;</td>
              <td>&amp;#x2A83;</td>
              <td>U+2A83</td>
            </tr>
            <tr>
              <td>⪄</td>
              <td>Greater-Than or Slanted Equal to with Dot Above Left</td>
              <td>&amp;#10884;</td>
              <td>&amp;#x2A84;</td>
              <td>U+2A84</td>
            </tr>
            <tr>
              <td>⪇</td>
              <td>Less-Than and Single-Line Not Equal To</td>
              <td>&amp;#10887;</td>
              <td>&amp;#x2A87;</td>
              <td>U+2A87</td>
            </tr>
            <tr>
              <td>⪈</td>
              <td>Greater-Than and Single-Line Not Equal To</td>
              <td>&amp;#10888;</td>
              <td>&amp;#x2A88;</td>
              <td>U+2A88</td>
            </tr>
            <tr>
              <td>⪋</td>
              <td>Less-Than Above Double-Line Equal Above Greater-Than</td>
              <td>&amp;#10891;</td>
              <td>&amp;#x2A8B;</td>
              <td>U+2A8B</td>
            </tr>
            <tr>
              <td>⪌</td>
              <td>Greater-Than Above Double-Line Equal Above Less-Than</td>
              <td>&amp;#10892;</td>
              <td>&amp;#x2A8C;</td>
              <td>U+2A8C</td>
            </tr>
            <tr>
              <td>⪍</td>
              <td>Less-Than Above Similar or Equal</td>
              <td>&amp;#10893;</td>
              <td>&amp;#x2A8D;</td>
              <td>U+2A8D</td>
            </tr>
            <tr>
              <td>⪎</td>
              <td>Greater-Than Above Similar or Equal</td>
              <td>&amp;#10894;</td>
              <td>&amp;#x2A8E;</td>
              <td>U+2A8E</td>
            </tr>
            <tr>
              <td>⪑</td>
              <td>Less-Than Above Greater-Than Above Double-Line Equal</td>
              <td>&amp;#10897;</td>
              <td>&amp;#x2A91;</td>
              <td>U+2A91</td>
            </tr>
            <tr>
              <td>⪒</td>
              <td>Greater-Than Above Less-Than Above Double-Line Equal</td>
              <td>&amp;#10898;</td>
              <td>&amp;#x2A92;</td>
              <td>U+2A92</td>
            </tr>
            <tr>
              <td>⪓</td>
              <td>Less-Than Above Slanted Equal Above Greater-Than Above Slanted Equal</td>
              <td>&amp;#10899;</td>
              <td>&amp;#x2A93;</td>
              <td>U+2A93</td>
            </tr>
            <tr>
              <td>⪔</td>
              <td>Greater-Than Above Slanted Equal Above Less-Than Above Slanted Equal</td>
              <td>&amp;#10900;</td>
              <td>&amp;#x2A94;</td>
              <td>U+2A94</td>
            </tr>
            <tr>
              <td>⪕</td>
              <td>Slanted Equal to or Less-Than</td>
              <td>&amp;#10901;</td>
              <td>&amp;#x2A95;</td>
              <td>U+2A95</td>
            </tr>
            <tr>
              <td>⪖</td>
              <td>Slanted Equal to or Greater-Than</td>
              <td>&amp;#10902;</td>
              <td>&amp;#x2A96;</td>
              <td>U+2A96</td>
            </tr>
            <tr>
              <td>⪗</td>
              <td>Slanted Equal to or Less-Than with Dot Inside</td>
              <td>&amp;#10903;</td>
              <td>&amp;#x2A97;</td>
              <td>U+2A97</td>
            </tr>
            <tr>
              <td>⪘</td>
              <td>Slanted Equal to or Greater-Than with Dot Inside</td>
              <td>&amp;#10904;</td>
              <td>&amp;#x2A98;</td>
              <td>U+2A98</td>
            </tr>
            <tr>
              <td>⪙</td>
              <td>Double-Line Equal to or Less-Than</td>
              <td>&amp;#10905;</td>
              <td>&amp;#x2A99;</td>
              <td>U+2A99</td>
            </tr>
            <tr>
              <td>⪚</td>
              <td>Double-Line Equal to or Greater-Than</td>
              <td>&amp;#10906;</td>
              <td>&amp;#x2A9A;</td>
              <td>U+2A9A</td>
            </tr>
            <tr>
              <td>⪛</td>
              <td>Double-Line Slanted Equal to or Less-Than</td>
              <td>&amp;#10907;</td>
              <td>&amp;#x2A9B;</td>
              <td>U+2A9B</td>
            </tr>
            <tr>
              <td>⪜</td>
              <td>Double-Line Slanted Equal to or Greater-Than</td>
              <td>&amp;#10908;</td>
              <td>&amp;#x2A9C;</td>
              <td>U+2A9C</td>
            </tr>
            <tr>
              <td>⪟</td>
              <td>Similar Above Less-Than Above Equals Sign</td>
              <td>&amp;#10911;</td>
              <td>&amp;#x2A9F;</td>
              <td>U+2A9F</td>
            </tr>
            <tr>
              <td>⪠</td>
              <td>Similar Above Greater-Than Above Equals Sign</td>
              <td>&amp;#10912;</td>
              <td>&amp;#x2AA0;</td>
              <td>U+2AA0</td>
            </tr>
            <tr>
              <td>⪨</td>
              <td>Less-Than Closed By Curve Above Slanted Equal</td>
              <td>&amp;#10920;</td>
              <td>&amp;#x2AA8;</td>
              <td>U+2AA8</td>
            </tr>
            <tr>
              <td>⪩</td>
              <td>Greater-Than Closed By Curve Above Slanted Equal</td>
              <td>&amp;#10921;</td>
              <td>&amp;#x2AA9;</td>
              <td>U+2AA9</td>
            </tr>
            <tr>
              <td>⪬</td>
              <td>Smaller Than or Equal To</td>
              <td>&amp;#10924;</td>
              <td>&amp;#x2AAC;</td>
              <td>U+2AAC</td>
            </tr>
            <tr>
              <td>⪭</td>
              <td>Larger Than or Equal To</td>
              <td>&amp;#10925;</td>
              <td>&amp;#x2AAD;</td>
              <td>U+2AAD</td>
            </tr>
            <tr>
              <td>⪮</td>
              <td>Equals Sign with Bumpy Above</td>
              <td>&amp;#10926;</td>
              <td>&amp;#x2AAE;</td>
              <td>U+2AAE</td>
            </tr>
            <tr>
              <td>⪯</td>
              <td>Precedes Above Single-Line Equals Sign</td>
              <td>&amp;#10927;</td>
              <td>&amp;#x2AAF;</td>
              <td>U+2AAF</td>
            </tr>
            <tr>
              <td>⪰</td>
              <td>Succeeds Above Single-Line Equals Sign</td>
              <td>&amp;#10928;</td>
              <td>&amp;#x2AB0;</td>
              <td>U+2AB0</td>
            </tr>
            <tr>
              <td>⪱</td>
              <td>Precedes Above Single-Line Not Equal To</td>
              <td>&amp;#10929;</td>
              <td>&amp;#x2AB1;</td>
              <td>U+2AB1</td>
            </tr>
            <tr>
              <td>⪲</td>
              <td>Succeeds Above Single-Line Not Equal To</td>
              <td>&amp;#10930;</td>
              <td>&amp;#x2AB2;</td>
              <td>U+2AB2</td>
            </tr>
            <tr>
              <td>⪳</td>
              <td>Precedes Above Equals Sign</td>
              <td>&amp;#10931;</td>
              <td>&amp;#x2AB3;</td>
              <td>U+2AB3</td>
            </tr>
            <tr>
              <td>⪴</td>
              <td>Succeeds Above Equals Sign</td>
              <td>&amp;#10932;</td>
              <td>&amp;#x2AB4;</td>
              <td>U+2AB4</td>
            </tr>
            <tr>
              <td>⪵</td>
              <td>Precedes Above Not Equal To</td>
              <td>&amp;#10933;</td>
              <td>&amp;#x2AB5;</td>
              <td>U+2AB5</td>
            </tr>
            <tr>
              <td>⪶</td>
              <td>Succeeds Above Not Equal To</td>
              <td>&amp;#10934;</td>
              <td>&amp;#x2AB6;</td>
              <td>U+2AB6</td>
            </tr>
            <tr>
              <td>⪷</td>
              <td>Precedes Above Almost Equal To</td>
              <td>&amp;#10935;</td>
              <td>&amp;#x2AB7;</td>
              <td>U+2AB7</td>
            </tr>
            <tr>
              <td>⪸</td>
              <td>Succeeds Above Almost Equal To</td>
              <td>&amp;#10936;</td>
              <td>&amp;#x2AB8;</td>
              <td>U+2AB8</td>
            </tr>
            <tr>
              <td>⪹</td>
              <td>Precedes Above Not Almost Equal To</td>
              <td>&amp;#10937;</td>
              <td>&amp;#x2AB9;</td>
              <td>U+2AB9</td>
            </tr>
            <tr>
              <td>⪺</td>
              <td>Succeeds Above Not Almost Equal To</td>
              <td>&amp;#10938;</td>
              <td>&amp;#x2ABA;</td>
              <td>U+2ABA</td>
            </tr>
            <tr>
              <td>⫃</td>
              <td>Subset of or Equal to with Dot Above</td>
              <td>&amp;#10947;</td>
              <td>&amp;#x2AC3;</td>
              <td>U+2AC3</td>
            </tr>
            <tr>
              <td>⫄</td>
              <td>Superset of or Equal to with Dot Above</td>
              <td>&amp;#10948;</td>
              <td>&amp;#x2AC4;</td>
              <td>U+2AC4</td>
            </tr>
            <tr>
              <td>⫅</td>
              <td>Subset of Above Equals Sign</td>
              <td>&amp;#10949;</td>
              <td>&amp;#x2AC5;</td>
              <td>U+2AC5</td>
            </tr>
            <tr>
              <td>⫆</td>
              <td>Superset of Above Equals Sign</td>
              <td>&amp;#10950;</td>
              <td>&amp;#x2AC6;</td>
              <td>U+2AC6</td>
            </tr>
            <tr>
              <td>⫉</td>
              <td>Subset of Above Almost Equal To</td>
              <td>&amp;#10953;</td>
              <td>&amp;#x2AC9;</td>
              <td>U+2AC9</td>
            </tr>
            <tr>
              <td>⫊</td>
              <td>Superset of Above Almost Equal To</td>
              <td>&amp;#10954;</td>
              <td>&amp;#x2ACA;</td>
              <td>U+2ACA</td>
            </tr>
            <tr>
              <td>⫋</td>
              <td>Subset of Above Not Equal To</td>
              <td>&amp;#10955;</td>
              <td>&amp;#x2ACB;</td>
              <td>U+2ACB</td>
            </tr>
            <tr>
              <td>⫌</td>
              <td>Superset of Above Not Equal To</td>
              <td>&amp;#10956;</td>
              <td>&amp;#x2ACC;</td>
              <td>U+2ACC</td>
            </tr>
            <tr>
              <td>⫑</td>
              <td>Closed Subset or Equal To</td>
              <td>&amp;#10961;</td>
              <td>&amp;#x2AD1;</td>
              <td>U+2AD1</td>
            </tr>
            <tr>
              <td>⫒</td>
              <td>Closed Superset or Equal To</td>
              <td>&amp;#10962;</td>
              <td>&amp;#x2AD2;</td>
              <td>U+2AD2</td>
            </tr>
            <tr>
              <td>⫹</td>
              <td>Double-Line Slanted Less-Than or Equal To</td>
              <td>&amp;#11001;</td>
              <td>&amp;#x2AF9;</td>
              <td>U+2AF9</td>
            </tr>
            <tr>
              <td>⫺</td>
              <td>Double-Line Slanted Greater-Than or Equal To</td>
              <td>&amp;#11002;</td>
              <td>&amp;#x2AFA;</td>
              <td>U+2AFA</td>
            </tr>
            <tr>
              <td>⭀</td>
              <td>Equals Sign Above Leftwards Arrow</td>
              <td>&amp;#11072;</td>
              <td>&amp;#x2B40;</td>
              <td>U+2B40</td>
            </tr>
            <tr>
              <td>⭂</td>
              <td>Leftwards Arrow Above Reverse Almost Equal To</td>
              <td>&amp;#11074;</td>
              <td>&amp;#x2B42;</td>
              <td>U+2B42</td>
            </tr>
            <tr>
              <td>⭈</td>
              <td>Rightwards Arrow Above Reverse Almost Equal To</td>
              <td>&amp;#11080;</td>
              <td>&amp;#x2B48;</td>
              <td>U+2B48</td>
            </tr>
            <tr>
              <td>⭊</td>
              <td>Leftwards Arrow Above Almost Equal To</td>
              <td>&amp;#11082;</td>
              <td>&amp;#x2B4A;</td>
              <td>U+2B4A</td>
            </tr>
          </tbody></table>

      </div>


    </>
  )
}

