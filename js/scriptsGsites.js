function criarPerfil(imgUrl, nome, projeto, lattesUrl, linkedinUrl = null ) {
   if(linkedinUrl){
   return `
     <tr>
       <td style="border: none" width="9%">
         <img src="${imgUrl}" alt="${nome}" width="100px" height="100px">
       </td>
       <td>
         <p style="line-height: 1;font-size: 1.1em;">${nome}</p>
         <p style="line-height: 1;font-size: 1em;"><span style="color: #000000"><strong>Projeto: </strong></span>${projeto}</p>
         <p style="line-height: 1em;font-size: 1em;">
           <a href="${lattesUrl}" target="_blank"><img width="30px" src="https://avrgroup.github.io/virtus/img/logoLattes.jpeg" alt="lattes"></a>
           <a href="${linkedinUrl}" target="_blank"><img width="30px" src="https://avrgroup.github.io/virtus/img/logoLinkedin.jpeg" alt="linkedin"></a>
         </p>
       </td>
     </tr>
   `;
   }
   else{
      return `
      <tr>
        <td style="border: none" width="9%">
          <img src="${imgUrl}" alt="${nome}" width="100px" height="100px">
        </td>
        <td>
         <p style="line-height: 1;font-size: 1.1em;">${nome}</p>
         <p style="line-height: 1;font-size: 1em;"><span style="color: #000000"><strong>Projeto: </strong></span>${projeto}</p>
          <p style="line-height: 1em;font-size: 1em;">
            <a href="${lattesUrl}" target="_blank"><img width="30px" src="https://avrgroup.github.io/virtus/img/logoLattes.jpeg" alt="lattes"></a>
          </p>
        </td>
      </tr>
    `;
   }
 }