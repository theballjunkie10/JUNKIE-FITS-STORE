const Spinner = () => (
  <div className="flex justify-center items-center py-10">
    <div className="animated-spin rounded full h-8 q-8 border-4 border-t-transparent border-primary"></div>
    <span className="ml-3 text-gray-500">loading...</span>
  </div>
);

export default Spinner;

