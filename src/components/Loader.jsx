

const Loader = () => {
  return (
    <div>
      <style>
        {`
/* HTML: <div class="loader"></div> */
.loader {
  display: inline-flex;
  border: 10px solid #000;
  border-radius: 5px;
}
.loader::before,
.loader::after {
  content: "0 1 2 3 4 5 6 7 8 9 0";
  font-size: 30px;
  font-family: monospace;
  font-weight: bold;
  line-height: 1em;
  height: 1em;
  width: 1.2ch;
  text-align: center;
  outline: 1px solid #000;
  color: #0000;
  text-shadow: 0 0 0 #000;
  overflow: hidden;
  animation: l4 1s infinite linear;
}
.loader::before {
  animation-duration: 2.5s;
}
@keyframes l4 {
  100% {
    text-shadow: 0 var(--t, -10em) 0 #000;
  }
}


        `}
      </style>

      
<div className="main mt-96 ml-40 lg:mt-80 lg:ml-96">
<div className="loader"></div>
</div>

    </div>
  );
};

export default Loader;
