import ContextMenu from "./components/context-menu";
import ContextMenuOptionModal from "./components/context-menu-option-modal";
import CopyButton from "./components/copy-button";
import FormContext from "./components/form-context";
import FormDisplayer from "./components/form-displayer";
import FormJsonInputField from "./components/form-json-input-field";
import Legend from "./components/legend";

export default function Home() {
  return (
    <div className="max-h-screen overflow-hidden">
      <FormContext>
        <ContextMenuOptionModal />
        <ContextMenu />
        <main className="grid grid-cols-[1fr_25%] h-screen max-h-screen overflow-hidden">
          <div className="p-16 overflow-y-scroll">
            <div className="max-w-3xl m-auto">
              <FormDisplayer />
            </div>
          </div>
          <div className="relative bg-white border-l border-zinc-300 p-8 text-black">
            <h1 className="font-bold text-lg">NexHealth Form Edits</h1>
            <FormJsonInputField />
            <div className="flex gap-2 justify-end">
              <CopyButton />
            </div>
            <Legend />
          </div>
        </main>
      </FormContext>
    </div>
  );
}