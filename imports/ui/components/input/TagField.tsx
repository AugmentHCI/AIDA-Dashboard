import React, { useEffect, useState } from "react";
import Icon from "../displays/Icon";
import Tag from "../displays/Tag";

interface TagFieldProps {
  label?: string;
  placeholder?: string;
  children?: React.ReactNode;
  values?: string[];
  onChange?: (e: string[]) => void;
  type?: "text" | "number";
}

function TagField({
  label,
  placeholder,
  values,
  onChange,
  type = "text",
}: TagFieldProps) {
  const [typedTag, setTypedTag] = useState<string>("");
  const [tags, setTags] = useState<string[]>(values ?? []);

  function handleChange(value: string) {
    if (value.length > 1 && [",", ";"].includes(value[value.length - 1])) {
      const newTags = [...tags].filter((tag) => tag !== typedTag);
      onChange && onChange([...newTags, typedTag]);
      setTags([...newTags, typedTag]);
      setTypedTag("");
    } else {
      setTypedTag(value);
    }
  }

  function removeTag(value: string) {
    const newTags = [...tags].filter((tag) => tag !== value);
    setTags(newTags);
    onChange && onChange(newTags);
  }

  useEffect(() => {
    values && setTags(values);
  }, [values]);

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <p className="pl-1 text-xs font-semibold uppercase text-slate-500 dark:text-slate-300">
          {label}
        </p>
      )}
      <div
        className={`flex gap-2 px-4 py-2 border rounded-md dark:border-slate-700 border-slate-200 text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 overflow-hidden`}
      >
        {tags.map((tag) => {
          return (
            <Tag onClick={() => removeTag(tag)} size="md" key={tag}>
              {tag}
              <Icon icon="close" outline />
            </Tag>
          );
        })}
        <input
          className={
            "flex focus:outline-none box-border my-1 dark:bg-slate-900 w-full"
          }
          type={type}
          placeholder={placeholder}
          value={typedTag}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default TagField;
