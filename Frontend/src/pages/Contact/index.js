// import React, { useEffect, useRef } from 'react';
// import dragula from 'dragula';
// import 'dragula/dist/dragula.min.css';

// const KanbanBoard = () => {
//   const draggedItem = useRef(null); // Ref to track the item being dragged

//   useEffect(() => {
//     const swimlanes = Array.from(document.querySelectorAll('.kanban-column'));
//     const drake = dragula(swimlanes);

//     // Set default colors for items in each swimlane
//     swimlanes.forEach((swimlane) => {
//       const defaultColor = getDefaultColor(swimlane.id);
//       const items = Array.from(swimlane.children).filter((item) => item.tagName.toLowerCase() === 'div');
//       items.forEach((item) => {
//         item.style.backgroundColor = defaultColor;
//       });
//     });

//     drake.on('drag', el => {
//       draggedItem.current = el; // Set the dragged item when drag starts
//     });

//     drake.on('drop', (el, target) => {
//       const targetSwimlaneId = target.getAttribute('id');

//       // Handle logic for changing color of the dragged item
//       if (draggedItem.current) {
//         switch (targetSwimlaneId) {
//           case 'todo':
//             draggedItem.current.style.backgroundColor = 'grey'; // Backlog swimlane color
//             break;
//           case 'in-progress':
//             draggedItem.current.style.backgroundColor = 'blue'; // In Progress swimlane color
//             break;
//           case 'done':
//             draggedItem.current.style.backgroundColor = 'green'; // Complete swimlane color
//             break;
//           default:
//             draggedItem.current.style.backgroundColor = '#fff'; // Reset color for other swimlanes
//             break;
//         }

//         draggedItem.current = null; // Reset the dragged item reference
//       }

//       // Handle logic for reordering within the same swimlane and moving to a different swimlane
//       // ... (your existing logic for reordering and moving)
//     });

//     return () => {
//       drake.destroy();
//     };
//   }, []);

//   const getDefaultColor = (swimlaneId) => {
//     switch (swimlaneId) {
//       case 'todo':
//         return 'grey'; // Backlog swimlane default color
//       case 'in-progress':
//         return 'blue'; // In Progress swimlane default color
//       case 'done':
//         return 'green'; // Complete swimlane default color
//       default:
//         return '#fff'; // Default color for other swimlanes
//     }
//   };

//   return (
//     <div className="kanban-board">
//       <div className="kanban-column" id="todo">
//         <h2>To Do</h2>
//         <div className="kanban-card">Task 1</div>
//         <div className="kanban-card">Task 2</div>
//         {/* Add more cards as needed */}
//       </div>
//       <div className="kanban-column" id="in-progress">
//         <h2>In Progress</h2>
//         <div className="kanban-card">Task 1</div>
//         <div className="kanban-card">Task 2</div>
//       </div>
//       <div className="kanban-column" id="done">
//         <h2>Done</h2>
//         <div className="kanban-card">Task 1</div>
//         <div className="kanban-card">Task 2</div>
//       </div>
//     </div>
//   );
// };

// export default KanbanBoard;


import Header from '../../components/Header'
import Footer from '../../components/footer'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

const Index2 = () => {
    const [fulname, setFullname] = useState('')
    const [email, setemail] = useState('')

    const handleSubmit = async () => {
        const response = await axios.post(`http://localhost:3001/contact/contact`, { fulname, email });
        toast.success('Added successful!');
    }

    return (
        <div>
            <Header />
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 class="title-font font-medium text-3xl text-gray-900">Add HERE</h1>
                        <p class="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
                    </div>
                    <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                        <div class="relative mb-4">
                            <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
                            <input type="text" id="full-name" name="full-name"
                                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                            />
                        </div>
                        <div class="relative mb-4">
                            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                value={fulname}
                                onChange={(e) => setFullname(e.target.value)} />
                        </div>
                        <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleSubmit}>Add</button>
                        <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                    </div>
                </div>
            </section>
            <Footer />
            <Toaster />
        </div>
    )
}

export default Index2

