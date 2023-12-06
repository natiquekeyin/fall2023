// This will read the title of the document and return both variable and a setter function. Reading the title and changing the title of the document...

import { useEffect, useState } from "react";

const useDocTitle = ({ title }) => {
  const [docTitle, setDocTitle] = useState(title);

  useEffect(() => {
    document.title = docTitle;
  }, [docTitle]);

  return [docTitle, setDocTitle];
};

export default useDocTitle;
