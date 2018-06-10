
   export function classtoggler(){

      const togglers = document.querySelectorAll('[data-toggler-target]');

      // remove all of the classes
      function clear(groupItems, togglerClass){
         groupItems.forEach(function(groupItem){
            groupItem.classList.remove('active');
            const togglerGroupTarget = document.querySelector(groupItem.getAttribute('data-toggler-target'));
            togglerGroupTarget.classList.remove(togglerClass);
         });
      }

      togglers.forEach(function(toggler){

         const togglerTarget = document.querySelector(toggler.getAttribute('data-toggler-target'));
         const customTargetClass = toggler.getAttribute('data-toggler-class');
         const togglerGroup = toggler.getAttribute('data-toggler-group');
         const togglerClass = customTargetClass ? customTargetClass : 'active';

         toggler.addEventListener('click', function(e){

            e.preventDefault();

            // if groups defined
            //------------------------------------------------------

               const togglerGroupItems = document.querySelectorAll('[data-toggler-group='+ togglerGroup + ']')

               if (togglerGroupItems.length > 0) {
                  // if click took place on an opend element
                  if (this.classList.contains('active')) {
                     clear(togglerGroupItems, togglerClass);
                  } else {
                     clear(togglerGroupItems, togglerClass);

                     // add the needed classes
                     toggler.classList.add('active')
                     togglerTarget.classList.add(togglerClass);
                  }

            // if no groups defined
            //------------------------------------------------------
               } else {

                  // add the needed classes
                  toggler.classList.toggle('active')
                  togglerTarget.classList.toggle(togglerClass);
               }
         });
      });
   }


   //*******************************************************
   // Remove class by group name
   //*******************************************************

      export function classtogglerRemoveClassByGroup(groupName){

         const activeItems = document.querySelectorAll(`[data-toggler-group=${groupName}]`);

         activeItems.forEach(function(activeItem){

            // if custom class is defined
            const customClass = activeItem.getAttribute('data-toggler-class');
            const activeClass = (customClass) ? customClass : 'active';

            // remove the active state from the triggering element
            activeItem.classList.remove('active');

            // remove the active state from the targeted element
            const target = activeItem.getAttribute('data-toggler-target');
            const activeTarget = document.querySelector(target);
            activeTarget.classList.remove(activeClass);
         });
      }
