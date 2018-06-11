

   //*******************************************************
   // classtoggler
   //*******************************************************

      import { classtoggler, classtogglerRemoveClassByGroup } from './classtoggler/classtoggler.js';
      classtoggler();

      // remove active class if clicked outside of the navigation
      const navigation = document.getElementById('primary-nav');
      document.onclick = function(e) {
         const target = e.target;
         if (target !== navigation && !navigation.contains(e.target)){
            classtogglerRemoveClassByGroup('navigation')
         }
      }

   //*******************************************************
   // highlight
   //*******************************************************

      import './prism.js'

   //*******************************************************
   // styles
   //*******************************************************

      import '../scss/styles.scss';
