

   window.togglers = document.querySelectorAll('[data-toggler-target]');

   //*******************************************************
   // Helpers
   //*******************************************************

      // remove all of the classes
      function clear(groupItems, togglerClass){
         groupItems.forEach(function(groupItem){
            groupItem.classList.remove('active');
            const togglerGroupTarget = document.querySelector(groupItem.getAttribute('data-toggler-target'));
            togglerGroupTarget.classList.remove(togglerClass);
         });
      }

      // handle click
      function handleToggleClick(e){

         e.preventDefault();
         const nodes = e.path;

         // lets handle the bubbbling in case the selector is a parent f.ex <a data-toggler-target=""><img></a>
         nodes.some(node => {

            if (node === this) {
               const toggler = node;
               const togglerTargets = toggler.getAttribute('data-toggler-target').replace(/\s+/g, '').split(',');
               const customTargetClass = toggler.getAttribute('data-toggler-class');
               const togglerGroup = toggler.getAttribute('data-toggler-group');
               const togglerClass = customTargetClass ? customTargetClass : 'active';

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
                        togglerTargets.forEach(togglerTarget => {
                           document.querySelector(togglerTarget).classList.add(togglerClass);
                        });
                     }

               // if no groups defined
               //------------------------------------------------------
                  } else {

                     // add the needed classes
                     toggler.classList.toggle('active')
                     togglerTargets.forEach(togglerTarget => {

                        const target = document.querySelector(togglerTarget);
                        const currentClasses = target.classList;
                        const newClasses = togglerClass.replace(/\s/g, '').split(',');

                        newClasses.forEach(newClass => {
                           currentClasses.toggle(newClass);
                        })

                     });
                  }

               // stop iterating if found
               return true;
            }
         })
      }

   //*******************************************************
   // Main
   //*******************************************************

      export function classtoggler(){
         togglers.forEach(function(toggler){
            toggler.addEventListener('click', handleToggleClick, true);
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


   //*******************************************************
   // Update collection
   //*******************************************************

      export function classtogglerUpdate(){
         togglers.forEach(toggler => {
            toggler.removeEventListener('click', handleToggleClick , true);
         });
         togglers = document.querySelectorAll('[data-toggler-target]');
         classtoggler()
      }
