import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import PublicRoute from "./routing/PublicRoute";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"

const queryClient = new QueryClient();
function App() {

  return (
    <div className="">
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <PublicRoute />
      </QueryClientProvider>
    </div>
  );
}

export default App;
