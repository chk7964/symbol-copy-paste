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
        title="Zeta Symbols [Copy And Paste]"
        description="Free Repeat Text Generator - Copy & Paste | Download And Print Any Typed Text, leeter, Words, Sentense And phrases."
      />
      <ToastContainer />



      <div className='p-4  '>
        <p>If you want type blank space in your text message then you are on the right website. Here you can copy multiple type blank space.</p><table>
          <tbody>
            <tr>
              <th>Character</th>
              <th>Meaning</th>
              <th>Unicode</th>
              <th>HTML Code</th>
              <th>Hex Code</th>
              <th>JS/JAVA/C</th>
              <th>CSS</th>
            </tr>
            <tr>
              <td><span className='bg-gray-400'> </span></td>
              <td>Space</td>
              <td>U+0020</td>
              <td>&amp;#32;</td>
              <td>&amp;#x0020;</td>
              <td>\u0020</td>
              <td>\000020</td>
            </tr>
            <tr>
              <td><span className='bg-gray-400'>&nbsp;</span></td>
              <td>No-Break Space</td>
              <td>U+00A0</td>
              <td>&amp;#160;</td>
              <td>&amp;#x00A0;</td>
              <td>\u00A0</td>
              <td>\0000A0</td>
            </tr>
            <tr>
              <td><span className='bg-gray-400'>᠎</span></td>
              <td>Mongolian Vowel Separator</td>
              <td>U+180E</td>
              <td>&amp;#6158;</td>
              <td>&amp;#x180E;</td>
              <td>\u{'{180E}'}</td>
              <td>\180E</td>
            </tr>
            <tr>
              <td><span className='bg-gray-400'> </span></td>
              <td>Hair Space</td>
              <td>U+200A</td>
              <td>&amp;#8202;</td>
              <td>&amp;#x200A;</td>
              <td>\u{'{200A}'}</td>
              <td>\200A</td>
            </tr>
            <tr>
              <td><span className='bg-gray-400'>​</span></td>
              <td>Zero Width Space</td>
              <td>U+200B</td>
              <td>&amp;#8203;</td>
              <td>&amp;#x200B;</td>
              <td>\u{'{200B}'}</td>
              <td>\200B</td>
            </tr>
            <tr>
              <td><span className='bg-gray-400'> </span></td>
              <td>Narrow No Break Space</td>
              <td>U+202F</td>
              <td>&amp;#8239;</td>
              <td>&amp;#x202F;</td>
              <td>\u{'{202F}'}</td>
              <td>\202F</td>
            </tr>
            <tr>
              <td><span className='bg-gray-400'> </span></td>
              <td>Medium Mathematical Space</td>
              <td>U+205F</td>
              <td>&amp;#8287;</td>
              <td>&amp;#x205F;</td>
              <td>\u{'{205F}'}</td>
              <td>\205F</td>
            </tr>
            <tr>
              <td><span className='bg-gray-400'>　</span></td>
              <td>Ideographic Space</td>
              <td>U+3000</td>
              <td>&amp;#12288;</td>
              <td>&amp;#x3000;</td>
              <td>\u{3000}</td>
              <td>\3000</td>
            </tr>
            <tr>
              <td><span className='bg-gray-400'>﻿</span></td>
              <td>Zero Width No-Break Space</td>
              <td>U+FEFF</td>
              <td>&amp;#65279;</td>
              <td>&amp;#xFEFF;</td>
              <td>\u{'{FEFF}'}</td>
              <td>\FEFF</td>
            </tr>
            <tr>
              <td><span className='bg-gray-400'>⠀</span></td>
              <td>braille pattern blank</td>
              <td>U+2800</td>
              <td>&amp;#10240;</td>
              <td>&amp;#x2800;</td>
              <td>\u{2800}</td>
              <td>\2800</td>
            </tr>
            <tr>
              <td><span className='bg-gray-400'> </span></td>
              <td>En Quad</td>
              <td>U+2000</td>
              <td>&amp;#8192;</td>
              <td>&amp;#x2000;</td>
              <td>\u{2000}</td>
              <td>\2000</td>
            </tr>
            <tr>
              <td><span className='bg-gray-400'> </span></td>
              <td>Em Quad</td>
              <td>U+2001</td>
              <td>&amp;#8193;</td>
              <td>&amp;#x2001;</td>
              <td>\u{2001}</td>
              <td>\2001</td>
            </tr>
            <tr>
              <td><span className='bg-gray-400'> </span></td>
              <td>En Space</td>
              <td>U+2002</td>
              <td>&amp;#8194;</td>
              <td>&amp;#x2002;</td>
              <td>\u{2002}</td>
              <td>\2002</td>
            </tr>
            <tr>
              <td><span className='bg-gray-400'> </span></td>
              <td>Em Space</td>
              <td>U+2003</td>
              <td>&amp;#8195;</td>
              <td>&amp;#x2003;</td>
              <td>\u{2003}</td>
              <td>\2003</td>
            </tr>
            <tr>
              <td><span className='bg-gray-400'> </span></td>
              <td>Three-Per-Em Space</td>
              <td>U+2004</td>
              <td>&amp;#8196;</td>
              <td>&amp;#x2004;</td>
              <td>\u{2004}</td>
              <td>\2004</td>
            </tr>
            <tr>
              <td><span className='bg-gray-400'> </span></td>
              <td>Four-Per-Em Space</td>
              <td>U+2005</td>
              <td>&amp;#8197;</td>
              <td>&amp;#x2005;</td>
              <td>\u{2005}</td>
              <td>\2005</td>
            </tr>
            <tr>
              <td><span className='bg-gray-400'> </span></td>
              <td>Six-Per-Em Space</td>
              <td>U+2006</td>
              <td>&amp;#8198;</td>
              <td>&amp;#x2006;</td>
              <td>\u{2006}</td>
              <td>\2006</td>
            </tr>
            <tr>
              <td><span className='bg-gray-400'> </span></td>
              <td>Figure Space</td>
              <td>U+2007</td>
              <td>&amp;#8199;</td>
              <td>&amp;#x2007;</td>
              <td>\u{2007}</td>
              <td>\2007</td>
            </tr>
            <tr>
              <td><span className='bg-gray-400'> </span></td>
              <td>Punctuation Space</td>
              <td>U+2008</td>
              <td>&amp;#8200;</td>
              <td>&amp;#x2008;</td>
              <td>\u{2008}</td>
              <td>\2008</td>
            </tr>
            <tr>
              <td><span className='bg-gray-400'> </span></td>
              <td>Thin Space</td>
              <td>U+2009</td>
              <td>&amp;#8201;</td>
              <td>&amp;#x2009;</td>
              <td>\u{2009}</td>
              <td>\2009</td>
            </tr>
          </tbody>
        </table>
      </div>


    </>
  )
}

