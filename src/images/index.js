const gadgets = {
    gadget1: import.meta.glob('./products/gadget-1.jpg', { eager: true })['./products/gadget-1.jpg'],
    gadget2: import.meta.glob('./products/gadget-2.jpg', { eager: true })['./products/gadget-2.jpg'],
    gadget3: import.meta.glob('./products/gadget-3.jpg', { eager: true })['./products/gadget-3.jpg'],
    gadget4: import.meta.glob('./products/gadget-4.jpg', { eager: true })['./products/gadget-4.jpg'],
    gadget5: import.meta.glob('./products/gadget-5.jpg', { eager: true })['./products/gadget-5.jpg'],
    gadget6: import.meta.glob('./products/gadget-6.jpg', { eager: true })['./products/gadget-6.jpg'],
    gadget7: import.meta.glob('./products/gadget-7.jpg', { eager: true })['./products/gadget-7.jpg'],
    gadget8: import.meta.glob('./products/gadget-8.jpg', { eager: true })['./products/gadget-8.jpg'],
    gadget9: import.meta.glob('./products/gadget-9.jpg', { eager: true })['./products/gadget-9.jpg'],
    gadget10: import.meta.glob('./products/gadget-10.jpg', { eager: true })['./products/gadget-10.jpg'],
    gadget11: import.meta.glob('./products/gadget-11.jpg', { eager: true })['./products/gadget-11.jpg'],
  };
  
  export default gadgets;
  