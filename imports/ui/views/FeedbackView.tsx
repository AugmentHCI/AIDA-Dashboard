import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Button from "../components/button/Button";
import HR from "../components/displays/HR";
import TagField from "../components/input/TagField";
import H4 from "../components/typography/H4";
import P from "../components/typography/P";

function FeedbackView() {
  const [tags, setTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (isLoading) {
        toast.success("Suggesties verstuurd", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setIsLoading(false);
        setTags([]);
        setIsDone(true);
      }
    }, 2000);
  }, [isLoading]);

  useEffect(() => {
    setTimeout(() => {
      setIsDone(false);
    }, 2000);
  }, [isDone]);

  return (
    <div className="flex flex-col">
      <HR />
      <H4 className="text-primary-700 leading-0">Feedback</H4>
      <div className="flex flex-col gap-6">
        <P>
          Je kan ook enkele suggesties geven, zodat het systeem daar in de
          toekomst rekening mee gaat houden. Beoordeel de afleiders rechts, of
          suggereer nieuwe afleiders hieronder.
        </P>
        <TagField
          label="Suggereer afleiders, gescheiden door een komma"
          values={tags}
          onChange={setTags}
        />
        {
          <Button
            loading={isLoading}
            onClick={() => setIsLoading(true)}
            disabled={isLoading || (tags.length === 0 && !isDone)}
            className="transition-all"
          >
            {isDone ? "Verstuurd!" : "Verstuur"}
          </Button>
        }
      </div>
    </div>
  );
}

export default FeedbackView;
