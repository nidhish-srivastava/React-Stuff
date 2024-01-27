import React, { useState,useEffect } from 'react'

function Modal() {
    const [state,setState] = useState(false)

    const closeModal = () =>{
        setState(false)
    }

  
    
    const New  = () =>{

        useEffect(()=>{
            document.body.style.overflowY = "hidden"  
            // WE will use cleanup function coz we want that once we close the modal,overflow shud be visible
            return ()=>{
                document.body.style.overflowY = "scroll"
            }
    
        },[])

       return(
        <div className='wrapper' onClick={closeModal}>   {/*We want that ki agrr bahr click kre container ke,tbb bhi bnd hojaae bsdka */}
            <div className='container'>
            <h1>STAY TUNED</h1>
            <p>Subscribe to my Newsletter by entering your email</p>
            <button onClick={closeModal}>Accept</button>
            </div>
        </div>
       )
    }

  return (
    <React.Fragment>
        <button onClick={()=>setState(true)}>Open Modal</button>
        {state && <New/>}
        <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos quia a est veritatis, blanditiis reiciendis. Natus, ad. Incidunt quasi accusantium dolore corrupti eligendi ipsum veritatis doloremque sunt repellat illum eaque error consectetur ducimus ratione iusto facere alias in beatae fuga vitae, totam facilis. Veniam voluptatem, illo enim molestiae suscipit facilis, libero similique nihil fugit ex itaque, in fuga asperiores eveniet non nam earum natus! Odit beatae necessitatibus, et illum consequatur quis, mollitia hic repellendus delectus labore voluptatibus commodi in. Aperiam voluptatem sed natus. Pariatur incidunt voluptas aperiam unde temporibus neque distinctio eum iusto cupiditate quasi ratione, quod voluptatum cum nihil mollitia quo, laudantium neque! Vero architecto eligendi similique ducimus mollitia. Porro, doloribus?
            <br />
            <br />
            <br />
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, facere quae neque soluta assumenda quam? Aperiam modi quas debitis illo assumenda accusamus, nostrum odit quos consectetur ipsum incidunt in veritatis?
            <br />
            <br />
            <br />
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis delectus quibusdam laudantium molestias similique illum ipsum, incidunt vero, natus tempore optio assumenda quis odio. Praesentium repellendus facilis quisquam, similique optio consectetur minus nobis debitis, necessitatibus maiores cupiditate assumenda placeat dolorem magnam consequuntur, autem ducimus libero qui vel? Veniam, ut optio autem voluptates quia voluptate ipsum odit aliquid nobis hic assumenda voluptatum deserunt illo, rem, voluptatibus blanditiis soluta dolor. Debitis ratione tenetur quam est nemo ducimus commodi dolorum veritatis obcaecati, sint laboriosam voluptatibus eveniet hic consequuntur natus laudantium mollitia quod magnam animi cupiditate odio distinctio quis asperiores. Saepe rerum, nostrum voluptatem velit rem in nobis ipsam nihil voluptates dolorem suscipit sint sequi dolore quis quidem corporis id. Suscipit tempore voluptatibus ratione, cupiditate eveniet ad sit repudiandae qui fugiat quidem id deleniti sequi necessitatibus. Ab sit eligendi quae, in, impedit facere dolor ipsa modi sapiente, deserunt voluptate incidunt ut eum dolorum laborum deleniti voluptas. Officia eaque quod quam neque mollitia minima dolor eveniet? Quae, fugit cupiditate. Doloremque beatae adipisci, voluptatum quod laudantium nostrum necessitatibus aliquam veritatis suscipit deserunt velit eveniet perferendis, repellat voluptatem delectus! Ratione pariatur dolore cumque dolorum asperiores illo esse iste mollitia velit quae. Incidunt nulla, id nam animi ipsa temporibus quam eaque doloribus iure numquam expedita nihil, saepe, non nemo. Quod placeat voluptatibus aut ipsa itaque ab necessitatibus hic, culpa quibusdam. Perferendis aspernatur aliquam sunt aut neque repudiandae, minima temporibus consequuntur iste reiciendis velit accusamus voluptate exercitationem deleniti atque nobis alias consequatur excepturi, fugit sit illum? Excepturi, pariatur. Iure nostrum ad nihil. Modi natus ullam blanditiis quasi provident iusto distinctio quisquam fuga maiores! Commodi nesciunt repellat labore enim qui quibusdam, accusantium vitae nobis sapiente nemo ex a autem incidunt? Ipsum vitae id perferendis corrupti illum nam neque ducimus. Nihil distinctio aut cumque, cupiditate adipisci a tenetur itaque omnis mollitia?
            <br />
            <br />
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quo, consequatur similique voluptatem temporibus obcaecati provident quas veritatis error qui in quidem, ducimus iste iure ad! Natus rerum, ex, reiciendis facere, suscipit earum in dolorum odio neque cupiditate cum! Corrupti obcaecati architecto quo nam nihil? Iste, suscipit quod delectus soluta ab labore quaerat consequuntur autem tempora vel nobis quia odit qui ut obcaecati omnis neque id tenetur quis, ullam eum error. Voluptates aspernatur quidem, impedit eaque at sunt laudantium rerum. Harum commodi corrupti reiciendis facilis accusamus aliquid possimus, in explicabo! Veniam ea optio eos, nostrum, animi aut mollitia numquam harum in impedit nam fugit cupiditate voluptas dolorem possimus consequatur tempore error voluptatibus laborum. Culpa quia magni recusandae provident aliquid magnam totam nihil temporibus unde ipsam voluptas officia, corporis quisquam libero, vero laudantium veritatis dolor inventore quae autem ipsa, at numquam laboriosam! Assumenda fugiat temporibus ut reiciendis minus cumque quo vel. Eligendi unde nisi, repellendus sint iure facilis, totam, magni ratione doloribus quibusdam pariatur eos nam laboriosam non iusto rem numquam? Deleniti quaerat modi obcaecati optio deserunt aut, repellendus quidem, pariatur ad fugit facilis sapiente minima asperiores! At aliquam praesentium molestias, debitis corporis velit architecto obcaecati deserunt consequuntur explicabo maxime, id unde incidunt neque corrupti modi? Sint dolor architecto minima? Saepe aperiam, ut unde tempora nihil neque numquam amet iusto? Ducimus aliquam soluta sit cum minima ea ad repellat minus aut laborum quis saepe nisi modi facere, quia magnam molestias sed a obcaecati! Veniam totam nesciunt eum ipsam quas dignissimos harum quidem, vel, eaque soluta odio obcaecati tempora et. Magnam, maiores fugiat officia deleniti suscipit voluptas et vel voluptates perferendis nisi molestias blanditiis beatae quibusdam unde harum nam? Totam, esse? Asperiores vel repudiandae, nulla blanditiis at eum sed placeat tenetur repellat odio unde porro cum nisi, perferendis architecto? Vero, pariatur exercitationem!
            <br />
            <br />
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde doloribus debitis, explicabo quibusdam perspiciatis, iusto quae neque non corrupti iure dolorem ducimus ab optio dolor asperiores impedit itaque sunt! Necessitatibus assumenda dolorum error vel aliquam? Cum assumenda accusamus blanditiis iste illum maiores, repellendus voluptate pariatur itaque corrupti quam et deserunt aspernatur eos modi autem quasi dignissimos unde minima quia dolorum deleniti vitae? Laborum distinctio mollitia impedit vitae reiciendis quia quis? Placeat veniam eaque delectus quidem dicta facere perferendis facilis, exercitationem nemo enim rerum. Ratione distinctio quis quidem odit ipsa a nisi impedit nihil natus quaerat obcaecati provident esse, minus maiores nostrum sunt eius eum eaque aliquid optio. Magni repudiandae minus veniam est temporibus ab officia a natus cumque nostrum aperiam vel deleniti cum, optio, voluptate necessitatibus consequatur omnis at iusto autem dolorum! Dolor dolore delectus soluta facilis porro. Fuga in ab iure, ullam labore, voluptas aliquam excepturi velit exercitationem ipsa ipsum recusandae at tempore vel expedita molestias voluptatibus! Quia amet aspernatur dolore quasi, nesciunt ipsa harum provident ipsam reprehenderit, doloremque animi. Adipisci similique itaque quo optio architecto quae! Labore voluptate repellat dolorem cumque, consequatur itaque commodi nam neque ad, mollitia repudiandae earum suscipit et quia. Nemo laboriosam tenetur cumque sequi ipsum, esse voluptatum nobis non consequatur vitae harum illo id vel ea cum optio et. Repudiandae doloremque, sint odio, magnam eius amet animi architecto sunt mollitia aliquid modi, ipsam sed a rerum dolor. Delectus assumenda ducimus voluptatem reprehenderit harum blanditiis eos nobis aspernatur fugit, veritatis temporibus omnis suscipit corrupti ipsum vel cumque dignissimos similique praesentium. Vero soluta fuga veniam nobis fugiat aliquam quaerat esse praesentium exercitationem quas obcaecati sit ex, ipsam reprehenderit placeat repellat necessitatibus accusamus nam vel, earum eveniet dicta. Error ab qui nihil illum sed, laborum voluptatem reiciendis libero aspernatur pariatur? Eligendi enim corrupti veritatis praesentium? Enim, obcaecati?

        </div>
    </React.Fragment>
  )
}

export default Modal