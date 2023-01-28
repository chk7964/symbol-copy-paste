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
        title="Male Sign & Symbol [Copy And Paste]"
        description="Free Repeat Text Generator - Copy & Paste | Download And Print Any Typed Text, leeter, Words, Sentense And phrases."
      />
      <ToastContainer />



      <div className='p-4  '>
        <p>You can copy male and female symbol.</p>
        <div className="area" >
          <span className="bt" onClick={copy} data-clipboard-text="	♂	">	♂	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⚣	">	⚣	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⚤	">	⚤	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⚥	">	⚥	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⚦	">	⚦	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⚧	">	⚧	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⚨	">	⚨	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	⚩	">	⚩	</span></div>
        <br />
        <div className='overflow-x-auto'>
          <table>
            <thead><tr><th>Male Sign &amp; Symbol</th><th>Symbol Name</th><th>Dec Code</th><th>Hex Code</th><th>Unicode</th></tr></thead>
            <tbody>
              <tr>
                <td>♂</td>
                <td>Male Sign</td>
                <td>&amp;#9794;</td>
                <td>&amp;#x2642;</td>
                <td>U+2642</td>
              </tr>
              <tr>
                <td>⚣</td>
                <td>Doubled Male Sign</td>
                <td>&amp;#9891;</td>
                <td>&amp;#x26A3;</td>
                <td>U+26A3</td>
              </tr>
              <tr>
                <td>⚤</td>
                <td>Interlocked Female and Male Sign</td>
                <td>&amp;#9892;</td>
                <td>&amp;#x26A4;</td>
                <td>U+26A4</td>
              </tr>
              <tr>
                <td>⚥</td>
                <td>Male and Female Sign</td>
                <td>&amp;#9893;</td>
                <td>&amp;#x26A5;</td>
                <td>U+26A5</td>
              </tr>
              <tr>
                <td>⚦</td>
                <td>Male with Stroke Sign</td>
                <td>&amp;#9894;</td>
                <td>&amp;#x26A6;</td>
                <td>U+26A6</td>
              </tr>
              <tr>
                <td>⚧</td>
                <td>Male with Stroke and Male and Female Sign</td>
                <td>&amp;#9895;</td>
                <td>&amp;#x26A7;</td>
                <td>U+26A7</td>
              </tr>
              <tr>
                <td>⚨</td>
                <td>Vertical Male with Stroke Sign</td>
                <td>&amp;#9896;</td>
                <td>&amp;#x26A8;</td>
                <td>U+26A8</td>
              </tr>
              <tr>
                <td>⚩</td>
                <td>Horizontal Male with Stroke Sign</td>
                <td>&amp;#9897;</td>
                <td>&amp;#x26A9;</td>
                <td>U+26A9</td>
              </tr>
            </tbody></table></div>

      </div>


    </>
  )
}

