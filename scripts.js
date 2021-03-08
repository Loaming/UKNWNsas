new Vue ({
    el: '#menu',
    data: {
      items: [
      'about',
      'cases',
      'team',
      'contacts',
      ],
    show: false
  },
  watch: {
    show: function(hide) {
      let className = 'closed';
      if (hide) {
        document.body.style.overflow='hidden';
      } else {
        document.body.style.overflow='auto';
      }
    } 
   }
  });