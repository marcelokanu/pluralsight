import { addNewTask, updateTask } from './server';

(async function myFunc() {
  
  await addNewTask({
    name: "My task test 2",
    id: "321"
  });

  await updateTask({
    id: "12346",
    name: "My task test UPDATED!!!!"
  })
}) ();