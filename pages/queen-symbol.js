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
        title="Queen Symbol [Copy And Paste]"
        description="Free Repeat Text Generator - Copy & Paste | Download And Print Any Typed Text, leeter, Words, Sentense And phrases."
      />
      <ToastContainer />



      <div className='p-4  '>
        <p>Queen Symbol copy here with their html code.</p><div className="area" >
          <span className="bt" onClick={copy} data-clipboard-text="	♕	">	♕	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	♛	">	♛	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	🂭	">	🂭	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	🂽	">	🂽	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	🃍	">	🃍	</span>
          <span className="bt" onClick={copy} data-clipboard-text="	🃝	">	🃝	</span></div>
        <br />
        <table>
          <thead><tr><th>Queen Symbol</th><th>Symbol Name</th><th>Dec Code</th><th>Hex Code</th><th>Unicode</th></tr></thead>
          <tbody>
            <tr>
              <td>♕</td>
              <td>White Chess Queen</td>
              <td>&amp;#9813;</td>
              <td>&amp;#x2655</td>
              <td>U+2655</td>
            </tr>
            <tr>
              <td>♛</td>
              <td>Black Chess Queen</td>
              <td>&amp;#9819;</td>
              <td>&amp;#x265B</td>
              <td>U+265B</td>
            </tr>
            <tr>
              <td>🂭</td>
              <td>Playing Card Queen of Spades</td>
              <td>&amp;#127149;</td>
              <td>&amp;#x1F0AD</td>
              <td>U+1F0AD</td>
            </tr>
            <tr>
              <td>🂽</td>
              <td>Playing Card Queen of Hearts</td>
              <td>&amp;#127165;</td>
              <td>&amp;#x1F0BD</td>
              <td>U+1F0BD</td>
            </tr>
            <tr>
              <td>🃍</td>
              <td>Playing Card Queen of Diamonds</td>
              <td>&amp;#127181;</td>
              <td>&amp;#x1F0CD</td>
              <td>U+1F0CD</td>
            </tr>
            <tr>
              <td>🃝</td>
              <td>Playing Card Queen of Clubs</td>
              <td>&amp;#127197;</td>
              <td>&amp;#x1F0DD</td>
              <td>U+1F0DD</td>
            </tr>
          </tbody></table>

      </div>


    </>
  )
}

