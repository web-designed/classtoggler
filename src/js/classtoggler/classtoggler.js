
   //*******************************************************
   // Helpers
   //*******************************************************

      // remove all of the classes
      function clear(groupItems, togglerClass){
         for (var i = 0; i < groupItems.length; i++) {
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
                  for (var i = 0; i < togglerTargets.length; i++) {
                     const togglerTarget = togglerTargets[i];
                     document.querySelector(togglerTarget).classList.add(togglerClass);
                  }
               }

         // if no groups defined
         //------------------------------------------------------
            } else {

               // add the needed classes
               toggler.classList.toggle('active')
               for (var i = 0; i < togglerTargets.length; i++) {
                  const togglerTarget = togglerTargets[i];
                  const target = document.querySelector(togglerTarget);
                  const currentClasses = target.classList;
                  const newClasses = togglerClass.replace(/\s/g, '').split(',');

                  for (var key = 0; key < newClasses.length; key++) {
                     const newClass = newClasses[key];
                     currentClasses.toggle(newClass);
                  }

               };
            }
      }

   //*******************************************************
   // Main
   //*******************************************************

      export function classtoggler(){
         window.togglers = document.querySelectorAll('[data-toggler-target]');
         for (var i = 0; i < togglers.length; i++) {
            const toggler = togglers[i];
            toggler.addEventListener('click', handleToggleClick, true);
         }
      }


   //*******************************************************
   // Remove class by group name
   //*******************************************************

      export function classtogglerRemoveClassByGroup(groupName){

         const activeItems = document.querySelectorAll('[data-toggler-group="' + groupName + '"]');

         for (var i = 0; i < activeItems.length; i++) {

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
         for (var i = 0; i < togglers.length; i++) {
            const toggler = togglers[i];
            toggler.removeEventListener('click', handleToggleClick , true);
         }
         togglers = document.querySelectorAll('[data-toggler-target]');
         classtoggler()
      }


   //*******************************************************
   // Form elements
   //*******************************************************

      export function classtogglerForm(formSelector){

         const form = document.querySelector(formSelector);
         if(form){
            const activeInputs = form.querySelectorAll('[data-toggler-form-target]');

            for (var i = 0; i < activeInputs.length; i++) {

               const activeInput = activeInputs[i];

               // if custom class defined
               var cssClass = activeInput.getAttribute('data-toggler-form-class')
               cssClass = cssClass ? cssClass : 'show';

               // Mark the classes on load
               handleChange(activeInput, cssClass);

               // If change takes place
               activeInput.addEventListener('change', function(){
                  handleChange(activeInput, cssClass);
               });
            }
         } else {
            console.warn("the form you defined '"+ formSelector +"' doesn't exist in the DOM");
         }
         
      }

      // Helper Functions
      //--------------------------------------------------------

      function handleChange(activeInput, cssClass) {
         const groupName = activeInput.getAttribute('name');
         if (groupName) {
            const group = document.querySelectorAll('[name="' + groupName + '"]');
            for (var i = 0; i < group.length; i++) {
               const input = group[i];
               const targetSelector = input.getAttribute('data-toggler-form-target');
               if(targetSelector !== ''){
                  const targetObject = document.querySelector(targetSelector);
                  if (targetObject) {
                     const target = document.querySelector(targetSelector);
                     if (input.checked) {
                        target.classList.add(cssClass);
                     }
                     else {
                        target.classList.remove(cssClass);
                     }
                  }
               }
            }
         }
         else {
            const missing = activeInput.getAttribute('id') || activeInput.getAttribute('class');
            console.warn("classtoggler: Please define the [name=''] attribute for " + missing);
         }
      }

