import React, { useRef } from 'react'

function InterMarks() {

    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let sanskritInputRef = useRef();
    let englishInputRef = useRef();
    let botonyInputRef = useRef();
    let zoologyInputRef = useRef();
    let physicsInputRef = useRef();
    let chemistryInputRef = useRef();
    let botonypracticalInputRef = useRef();
    let zoologypracticalInputRef = useRef();
    let physicspracticalInputRef = useRef();
    let chemistrypracticalInputRef = useRef();
    let resultParaRef = useRef();
    let firstNameSpanRef=useRef();
    let lastNameSpanRef=useRef();
    let sanskritSpanRef=useRef();
    let englishSpanRef=useRef();
    let botonySpanRef=useRef();
    let zoologySpanRef=useRef();
    let physicsSpanRef=useRef();
    let chemistrySpanRef=useRef();
    let botonypracticalSpanRef=useRef();
    let zoologypracticalSpanRef=useRef();
    let physicspracticalSpanRef=useRef();
    let chemistrypracticalSpanRef=useRef();

  return (
    <div>
        <form>
            <div>
                <label>First Name</label>
                <input ref={firstNameInputRef}></input>
                <span ref={firstNameSpanRef}></span>
            </div>
            <div>
                <label>Last Name</label>
                <input ref={lastNameInputRef}></input>
                <span ref={lastNameSpanRef}></span>
            </div>
            <div>
                <label>Sanskrit</label>
                <input 
                ref={sanskritInputRef}
                onBlur={()=>{
                    sanskritInputRef.current.style.backgroundColor="";
                    console.log("Sanskrit onBlur");
                  }} 
                  onFocus={()=>{
                    sanskritInputRef.current.style.backgroundColor="orange";
                    console.log("Sanskrit onFocus");
                  }} 
                  onChange={()=>{
                    sanskritSpanRef.current.innerHTML= sanskritInputRef.current.value >=35?"Pass":"Fail";
                    sanskritSpanRef.current.style.backgroundColor= sanskritInputRef.current.value >=35?"lightgreen":"red";
                  }}
                ></input>
                <span ref={sanskritSpanRef}></span>
            </div>
            <div>
                <label>English</label>
                <input
                 ref={englishInputRef}
                  onBlur={()=>{
                    englishInputRef.current.style.backgroundColor="";
                    console.log("Eng onBlur");
                  }} 
                  onFocus={()=>{
                    englishInputRef.current.style.backgroundColor="orange";
                    console.log("Eng onFocus");
                  }} 
                    onChange={()=>{
                        englishSpanRef.current.innerHTML= englishInputRef.current.value >=35?"Pass":"Fail";
                        englishSpanRef.current.style.backgroundColor= englishInputRef.current.value >=35?"lightgreen":"red";
                  }}
                  ></input>
                <span ref={englishSpanRef}></span>
            </div>
            <div>
                <label>Botony</label>
                <input
                 ref={botonyInputRef}
                 onBlur={()=>{
                    botonyInputRef.current.style.backgroundColor="";
                    console.log("Bot onBlur");
                  }} 
                  onFocus={()=>{
                    botonyInputRef.current.style.backgroundColor="orange";
                    console.log("Bot onFocus");
                  }} 
                  onChange={()=>{
                    botonySpanRef.current.innerHTML= botonyInputRef.current.value >=21?"Pass":"Fail";
                    botonySpanRef.current.style.backgroundColor= botonyInputRef.current.value >=21?"lightgreen":"red";
                  }}
                 ></input>
                <span ref={botonySpanRef}></span>
            </div>
            <div>
                <label>Zoology</label>
                <input
                 ref={zoologyInputRef}
                 onBlur={()=>{
                    zoologyInputRef.current.style.backgroundColor="";
                    console.log("Zoo onBlur");
                  }} 
                  onFocus={()=>{
                    zoologyInputRef.current.style.backgroundColor="orange";
                    console.log("Zoo onFocus");
                  }} 
                  onChange={()=>{
                    zoologySpanRef.current.innerHTML= zoologyInputRef.current.value >=21?"Pass":"Fail";
                    zoologySpanRef.current.style.backgroundColor= zoologyInputRef.current.value >=21?"lightgreen":"red";
                  }}
                 ></input>
                <span ref={zoologySpanRef}></span>
            </div>
            <div>
                <label>Physics</label>
                <input
                 ref={physicsInputRef}
                 onBlur={()=>{
                    physicsInputRef.current.style.backgroundColor="";
                    console.log("Phy onBlur");
                  }} 
                  onFocus={()=>{
                    physicsInputRef.current.style.backgroundColor="orange";
                    console.log("Phy onFocus");
                  }} 
                  onChange={()=>{
                    physicsSpanRef.current.innerHTML= physicsInputRef.current.value >=21?"Pass":"Fail";
                    physicsSpanRef.current.style.backgroundColor= physicsInputRef.current.value >=21?"lightgreen":"red";
                  }}
                 ></input>
                <span ref={physicsSpanRef}></span>
            </div>
            <div>
                <label>Chemistry</label>
                <input 
                ref={chemistryInputRef}
                onBlur={()=>{
                    chemistryInputRef.current.style.backgroundColor="";
                    console.log("Che onBlur");
                  }} 
                  onFocus={()=>{
                    chemistryInputRef.current.style.backgroundColor="orange";
                    console.log("Che onFocus");
                  }} 
                  onChange={()=>{
                    chemistrySpanRef.current.innerHTML= chemistryInputRef.current.value >=21?"Pass":"Fail";
                    chemistrySpanRef.current.style.backgroundColor= chemistryInputRef.current.value >=21?"lightgreen":"red";
                  }}
                ></input>
                <span ref={chemistrySpanRef}></span>
            </div>
            <div>
                <label>Botony Practical</label>
                <input
                 ref={botonypracticalInputRef}
                 onBlur={()=>{
                    botonypracticalInputRef.current.style.backgroundColor="";
                    console.log("Botonypractical onBlur");
                  }} 
                  onFocus={()=>{
                    botonypracticalInputRef.current.style.backgroundColor="orange";
                    console.log("Botonypractical onFocus");
                  }} 
                  onChange={()=>{
                    botonypracticalSpanRef.current.innerHTML= botonypracticalInputRef.current.value >=14?"Pass":"Fail";
                    botonypracticalSpanRef.current.style.backgroundColor= botonypracticalInputRef.current.value >=14?"lightgreen":"red";
                  }}
                 ></input>
                <span ref={botonypracticalSpanRef}></span>
            </div>
            <div>
                <label>Zoology Practical</label>
                <input
                 ref={zoologypracticalInputRef}
                 onBlur={()=>{
                    zoologypracticalInputRef.current.style.backgroundColor="";
                    console.log("Zoologypractical onBlur");
                  }} 
                  onFocus={()=>{
                    zoologypracticalInputRef.current.style.backgroundColor="orange";
                    console.log("Zoologypractical onFocus");
                  }} 
                  onChange={()=>{
                    zoologypracticalSpanRef.current.innerHTML= zoologypracticalInputRef.current.value >=14?"Pass":"Fail";
                    zoologypracticalSpanRef.current.style.backgroundColor= zoologypracticalInputRef.current.value >=14?"lightgreen":"red";
                  }}
                 ></input>
                <span ref={zoologypracticalSpanRef}></span>
            </div>
            <div>
                <label>Physics Practical</label>
                <input
                 ref={physicspracticalInputRef}
                 onBlur={()=>{
                    physicspracticalInputRef.current.style.backgroundColor="";
                    console.log("physicspractical onBlur");
                  }} 
                  onFocus={()=>{
                    physicspracticalInputRef.current.style.backgroundColor="orange";
                    console.log("physicspractical onFocus");
                  }} 
                  onChange={()=>{
                    physicspracticalSpanRef.current.innerHTML= physicspracticalInputRef.current.value >=14?"Pass":"Fail";
                    physicspracticalSpanRef.current.style.backgroundColor= physicspracticalInputRef.current.value >=14?"lightgreen":"red";
                  }}
                 ></input>
                <span ref={physicspracticalSpanRef}></span>
            </div>
            <div>
                <label>Chemistry Practical</label>
                <input 
                ref={chemistrypracticalInputRef}
                onBlur={()=>{
                    chemistrypracticalInputRef.current.style.backgroundColor="";
                    console.log("chemistrypractical onBlur");
                  }} 
                  onFocus={()=>{
                    chemistrypracticalInputRef.current.style.backgroundColor="orange";
                    console.log("chemistrypractical onFocus");
                  }} 
                  onChange={()=>{
                    chemistrypracticalSpanRef.current.innerHTML= chemistrypracticalInputRef.current.value >=14?"Pass":"Fail";
                    chemistrypracticalSpanRef.current.style.backgroundColor= chemistrypracticalInputRef.current.value >=14?"lightgreen":"red";
                  }}
                ></input>
                <span ref={chemistrypracticalSpanRef}></span>
            </div>
            <div>
                <button type="button" onClick={()=>{
                   // alert(sanskritInputRef.current.value);

                   let firstName= (firstNameInputRef.current.value);
                   let lastName= (lastNameInputRef.current.value);
                  let sanskritMarks= Number(sanskritInputRef.current.value);
                  let englishMarks= Number(englishInputRef.current.value);
                  let botonyMarks= Number(botonyInputRef.current.value);
                  let zoologyMarks= Number(zoologyInputRef.current.value);
                  let physicsMarks= Number(physicsInputRef.current.value);
                  let chemistryMarks= Number(chemistryInputRef.current.value); 
                  let botonypracticalMarks= Number(botonypracticalInputRef.current.value); 
                  let zoologypracticalMarks= Number(zoologypracticalInputRef.current.value);
                  let physicspracticalMarks= Number(physicspracticalInputRef.current.value);
                  let chemistrypracticalMarks= Number(chemistrypracticalInputRef.current.value);
                  let totalMarks = sanskritMarks+englishMarks+botonyMarks+zoologyMarks+physicsMarks+chemistryMarks+botonypracticalMarks
                  +zoologypracticalMarks+physicspracticalMarks+chemistrypracticalMarks;

                  let perc =(totalMarks/600)*100;
                  sanskritSpanRef.current.innerHTML=sanskritMarks>=35?"Pass":"fail";    
                  englishSpanRef.current.innerHTML=englishMarks>=35?"Pass":"fail";
                  botonySpanRef.current.innerHTML=botonyMarks>=21?"Pass":"fail";
                  zoologySpanRef.current.innerHTML=zoologyMarks>=21?"Pass":"fail";
                  physicsSpanRef.current.innerHTML=physicsMarks>=21?"Pass":"fail";
                  chemistrySpanRef.current.innerHTML=chemistryMarks>=21?"Pass":"fail";
                  botonypracticalSpanRef.current.innerHTML=botonypracticalMarks>=14?"Pass":"fail";
                  zoologypracticalSpanRef.current.innerHTML=zoologypracticalMarks>=14?"Pass":"fail";
                  physicspracticalSpanRef.current.innerHTML=physicspracticalMarks>=14?"Pass":"fail";
                  chemistrypracticalSpanRef.current.innerHTML= chemistrypracticalMarks>=14?"Pass":"fail";

                 resultParaRef.current.innerHTML= `${firstName} ${lastName} Got Total Marks Of ${totalMarks} With Percentage
                  Of ${perc.toFixed(2)}`;
                }}

                    >
                        Calculate Result</button>
            </div>
            <div>
                <p ref={resultParaRef}>Please enter values </p>
            </div>
            
        </form>
    </div>
  )
}

export default InterMarks