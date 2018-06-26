

   //*******************************************************
   // classtoggler
   //*******************************************************

      import { classtoggler, classtogglerRemoveClassByGroup, classtogglerUpdate, classtogglerForm } from './classtoggler/classtoggler.js';
      classtoggler();
      classtogglerForm('#test-form');

      // remove active class if clicked outside of the navigation
      const navigation = document.getElementById('primary-nav');
      document.onclick = function(e) {
         const target = e.target;
         if (target !== navigation && !navigation.contains(e.target)){
            classtogglerRemoveClassByGroup('navigation')
         }
      }

      // add new elements
      function addContent(){

         // button
         const div = document.createElement('span');
         const btn = `<button class="btn btn-primary" data-toggler-class="show" data-toggler-target="#div-2, #div-3">BLUE</button>`;
         div.innerHTML = btn;
         const container = document.getElementById('update');
         container.appendChild(div);

         // card
         const cardsContainer = document.getElementById('update-cards');
         const card = document.createElement('div');
         card.classList.add('col-md-6', 'collapsed', 'show');
         card.setAttribute('id', 'div-3');
         card.innerHTML = `
         <div class="card bg-primary text-white">
            <div class="card-header">
               <h2 class="mb-0">DIV 3</h2>
            </div>
            <div class="card-body">
               <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
         </div>`;
         console.log(card);
         cardsContainer.appendChild(card);

         classtogglerUpdate();
      }

      const btnAdd = document.getElementById('addBtn');
      btnAdd.addEventListener('click', function(e){
         e.preventDefault();
         this.classList.add('fadeOut')
         addContent();
      })

   //*******************************************************
   // highlight
   //*******************************************************

      import './prism.js'

   //*******************************************************
   // styles
   //*******************************************************

      import '../scss/styles.scss';
