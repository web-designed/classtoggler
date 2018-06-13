

   window.togglers = document.querySelectorAll('[data-toggler-target]');

   //*******************************************************
   // Helpers
   //*******************************************************

      // remove all of the classes
      function clear(groupItems, togglerClass){
         for (let i = 0; i < groupItems.length; i++) {
            const groupItem = groupItems[i];
            groupItem.classList.remove('active');
            const togglerGroupTarget = document.querySelector(groupItem.getAttribute('data-toggler-target'));
            togglerGroupTarget.classList.remove(togglerClass);
         }
      }

      // handle click
      function handleToggleClick(e){

         e.preventDefault();

         const toggler = this;
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
                  for (let i = 0; i < togglerTargets.length; i++) {
                     const togglerTarget = togglerTargets[i];
                     document.querySelector(togglerTarget).classList.add(togglerClass);
                  }
               }

         // if no groups defined
         //------------------------------------------------------
            } else {

               // add the needed classes
               toggler.classList.toggle('active')
               for (let i = 0; i < togglerTargets.length; i++) {
                  const togglerTarget = togglerTargets[i];
                  const target = document.querySelector(togglerTarget);
                  const currentClasses = target.classList;
                  const newClasses = togglerClass.replace(/\s/g, '').split(',');

                  for (let i = 0; i < newClasses.length; i++) {
                     const newClass = newClasses[i];
                     currentClasses.toggle(newClass);
                  }

               };
            }
      }

   //*******************************************************
   // Main
   //*******************************************************

      export function classtoggler(){
         for (let i = 0; i < togglers.length; i++) {
            const toggler = togglers[i];
            toggler.addEventListener('click', handleToggleClick, true);
         }
      }


   //*******************************************************
   // Remove class by group name
   //*******************************************************

      export function classtogglerRemoveClassByGroup(groupName){

         const activeItems = document.querySelectorAll('[data-toggler-group="' + groupName + '"]');

         for (let i = 0; i < activeItems.length; i++) {

            const activeItem = activeItems[i];

            // if custom class is defined
            const customClass = activeItem.getAttribute('data-toggler-class');
            const activeClass = (customClass) ? customClass : 'active';

            // remove the active state from the triggering element
            activeItem.classList.remove('active');

            // remove the active state from the targeted element
            const target = activeItem.getAttribute('data-toggler-target');
            const activeTarget = document.querySelector(target);
            activeTarget.classList.remove(activeClass);
         }
      }


   //*******************************************************
   // Update collection
   //*******************************************************

      export function classtogglerUpdate(){
         for (let i = 0; i < togglers.length; i++) {
            const toggler = togglers[i];
            toggler.removeEventListener('click', handleToggleClick , true);
         }
         togglers = document.querySelectorAll('[data-toggler-target]');
         classtoggler()
      }
