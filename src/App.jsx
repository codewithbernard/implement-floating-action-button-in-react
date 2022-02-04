import { FcAbout, FcBusinessman, FcCamera, FcFullTrash } from "react-icons/fc";

import Fab from "./components/FAB";

const actions = [
  { label: "About", icon: <FcAbout />, onClick: console.log },
  { label: "Profile", icon: <FcBusinessman />, onClick: console.log },
  { label: "Picture", icon: <FcCamera />, onClick: console.log },
  { label: "Trash", icon: <FcFullTrash />, onClick: console.log },
];

const App = () => {
  return (
    <main>
      <Fab actions={actions} />
    </main>
  );
};

export default App;
