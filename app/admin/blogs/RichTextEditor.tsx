"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import {
  Undo,
  Redo,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  List,
  ListOrdered,
  Link as LinkIcon,
  Unlink,
  Code,
  ChevronDown,
} from "lucide-react";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function RichTextEditor({
  value,
  onChange,
  placeholder = "Write your content here...",
}: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isHtmlMode, setIsHtmlMode] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState<string>("p");
  const isInternalChange = useRef(false);

  useEffect(() => {
    if (editorRef.current && !isInternalChange.current) {
      if (editorRef.current.innerHTML !== value) {
        editorRef.current.innerHTML = value || "";
      }
    }
    isInternalChange.current = false;
  }, [value, isHtmlMode]);

  const handleInput = useCallback(() => {
    if (editorRef.current) {
      isInternalChange.current = true;
      const html = editorRef.current.innerHTML;
      onChange(html === "<br>" ? "" : html);
    }
  }, [onChange]);

  const exec = (command: string, valueArg: string | null = null) => {
    if (isHtmlMode) return;
    if (editorRef.current) {
      editorRef.current.focus();
    }
    document.execCommand(command, false, valueArg ?? undefined);
    handleInput();
  };

  const handleFormatChange = (tag: string) => {
    setSelectedFormat(tag);
    if (tag === "p") {
      exec("formatBlock", "<p>");
    } else if (tag === "h1") {
      exec("formatBlock", "<h1>");
    } else if (tag === "h2") {
      exec("formatBlock", "<h2>");
    } else if (tag === "h3") {
      exec("formatBlock", "<h3>");
    } else if (tag === "h4") {
      exec("formatBlock", "<h4>");
    } else if (tag === "blockquote") {
      exec("formatBlock", "<blockquote>");
    } else if (tag === "pre") {
      exec("formatBlock", "<pre>");
    }
  };

  const handleAddLink = () => {
    const url = prompt("Enter link URL:", "https://");
    if (url) {
      exec("createLink", url);
    }
  };

  const handleTableAction = (action: string) => {
    if (isHtmlMode || !editorRef.current) return;
    editorRef.current.focus();

    if (action === "insert-2x2") {
      const tableHtml = `
        <table className="w-full border-collapse border border-gray-300 my-4 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-left font-semibold">Header 1</th>
              <th className="border border-gray-300 p-2 text-left font-semibold">Header 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Data 1</td>
              <td className="border border-gray-300 p-2">Data 2</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Data 3</td>
              <td className="border border-gray-300 p-2">Data 4</td>
            </tr>
          </tbody>
        </table>
        <p><br></p>
      `;
      exec("insertHTML", tableHtml);
    } else if (action === "insert-3x3") {
      const tableHtml = `
        <table className="w-full border-collapse border border-gray-300 my-4 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-left font-semibold">Header 1</th>
              <th className="border border-gray-300 p-2 text-left font-semibold">Header 2</th>
              <th className="border border-gray-300 p-2 text-left font-semibold">Header 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Cell 1</td>
              <td className="border border-gray-300 p-2">Cell 2</td>
              <td className="border border-gray-300 p-2">Cell 3</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Cell 4</td>
              <td className="border border-gray-300 p-2">Cell 5</td>
              <td className="border border-gray-300 p-2">Cell 6</td>
            </tr>
          </tbody>
        </table>
        <p><br></p>
      `;
      exec("insertHTML", tableHtml);
    } else if (action === "delete-table") {
      const selection = window.getSelection();
      if (!selection || !selection.anchorNode) return;
      let node: Node | null = selection.anchorNode;
      while (node && node !== editorRef.current) {
        if (node.nodeName === "TABLE") {
          (node as HTMLElement).remove();
          handleInput();
          break;
        }
        node = node.parentNode;
      }
    }
  };

  return (
    <div className="rounded-lg border border-gray-300 bg-white shadow-xs overflow-hidden">
      {/* Toolbar - Dark background matching attached image */}
      <div className="flex flex-wrap items-center gap-1.5 bg-gray-900 px-3 py-2 text-white border-b border-gray-800 select-none">
        {/* Undo & Redo */}
        <button
          type="button"
          onClick={() => exec("undo")}
          title="Undo"
          className="p-1.5 hover:bg-gray-800 rounded transition text-gray-300 hover:text-white"
        >
          <Undo className="size-4" />
        </button>
        <button
          type="button"
          onClick={() => exec("redo")}
          title="Redo"
          className="p-1.5 hover:bg-gray-800 rounded transition text-gray-300 hover:text-white"
        >
          <Redo className="size-4" />
        </button>

        <div className="h-5 w-px bg-gray-700 mx-1" />

        {/* Text Formatting */}
        <button
          type="button"
          onClick={() => exec("bold")}
          title="Bold (Ctrl+B)"
          className="p-1.5 hover:bg-gray-800 rounded transition font-bold text-gray-300 hover:text-white"
        >
          <Bold className="size-4" />
        </button>
        <button
          type="button"
          onClick={() => exec("italic")}
          title="Italic (Ctrl+I)"
          className="p-1.5 hover:bg-gray-800 rounded transition italic text-gray-300 hover:text-white"
        >
          <Italic className="size-4" />
        </button>
        <button
          type="button"
          onClick={() => exec("underline")}
          title="Underline (Ctrl+U)"
          className="p-1.5 hover:bg-gray-800 rounded transition underline text-gray-300 hover:text-white"
        >
          <Underline className="size-4" />
        </button>
        <button
          type="button"
          onClick={() => exec("strikeThrough")}
          title="Strikethrough"
          className="p-1.5 hover:bg-gray-800 rounded transition line-through text-gray-300 hover:text-white"
        >
          <Strikethrough className="size-4" />
        </button>

        <div className="h-5 w-px bg-gray-700 mx-1" />

        {/* Lists */}
        <button
          type="button"
          onClick={() => exec("insertUnorderedList")}
          title="Bullet List"
          className="p-1.5 hover:bg-gray-800 rounded transition text-gray-300 hover:text-white"
        >
          <List className="size-4" />
        </button>
        <button
          type="button"
          onClick={() => exec("insertOrderedList")}
          title="Numbered List"
          className="p-1.5 hover:bg-gray-800 rounded transition text-gray-300 hover:text-white"
        >
          <ListOrdered className="size-4" />
        </button>

        <div className="h-5 w-px bg-gray-700 mx-1" />

        {/* Links */}
        <button
          type="button"
          onClick={handleAddLink}
          title="Insert Link"
          className="p-1.5 hover:bg-gray-800 rounded transition text-gray-300 hover:text-white"
        >
          <LinkIcon className="size-4" />
        </button>
        <button
          type="button"
          onClick={() => exec("unlink")}
          title="Remove Link"
          className="p-1.5 hover:bg-gray-800 rounded transition text-gray-300 hover:text-white"
        >
          <Unlink className="size-4" />
        </button>

        <div className="h-5 w-px bg-gray-700 mx-1" />

        {/* Heading Dropdown */}
        <div className="relative inline-block">
          <select
            value={selectedFormat}
            onChange={(e) => handleFormatChange(e.target.value)}
            className="h-8 bg-gray-800 text-xs text-gray-200 border border-gray-700 rounded px-2 pr-6 appearance-none cursor-pointer focus:outline-none focus:border-red-500"
          >
            <option value="p">Paragraph</option>
            <option value="h1">Heading 1</option>
            <option value="h2">Heading 2</option>
            <option value="h3">Heading 3</option>
            <option value="h4">Heading 4</option>
            <option value="blockquote">Quote</option>
            <option value="pre">Code Block</option>
          </select>
          <ChevronDown className="size-3 text-gray-400 absolute right-1.5 top-2.5 pointer-events-none" />
        </div>

        {/* Table Dropdown */}
        <div className="relative inline-block">
          <select
            defaultValue=""
            onChange={(e) => {
              if (e.target.value) {
                handleTableAction(e.target.value);
                e.target.value = "";
              }
            }}
            className="h-8 bg-gray-800 text-xs text-gray-200 border border-gray-700 rounded px-2 pr-6 appearance-none cursor-pointer focus:outline-none focus:border-red-500"
          >
            <option value="" disabled>
              Table
            </option>
            <option value="insert-2x2">Insert 2x2 Table</option>
            <option value="insert-3x3">Insert 3x3 Table</option>
            <option value="delete-table">Delete Table</option>
          </select>
          <ChevronDown className="size-3 text-gray-400 absolute right-1.5 top-2.5 pointer-events-none" />
        </div>

        <div className="h-5 w-px bg-gray-700 mx-1" />

        {/* Toggle Raw HTML View */}
        <button
          type="button"
          onClick={() => setIsHtmlMode(!isHtmlMode)}
          title={isHtmlMode ? "Switch to Visual Editor" : "Switch to HTML Code"}
          className={`p-1.5 rounded transition text-xs flex items-center gap-1 font-mono ${
            isHtmlMode
              ? "bg-red-600 text-white"
              : "hover:bg-gray-800 text-gray-300 hover:text-white"
          }`}
        >
          <Code className="size-4" />
          <span>{isHtmlMode ? "Visual" : "HTML"}</span>
        </button>
      </div>

      {/* Editor Content Area */}
      {isHtmlMode ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full min-h-[420px] p-4 font-mono text-sm bg-gray-950 text-gray-100 border-none outline-none leading-relaxed resize-y"
          placeholder="<h1>Title</h1><p>Write your raw HTML here...</p>"
        />
      ) : (
        <div
          ref={editorRef}
          contentEditable
          onInput={handleInput}
          onBlur={handleInput}
          className="w-full min-h-[420px] p-4 bg-white text-gray-900 outline-none leading-relaxed max-w-none resize-y overflow-auto border-none
            [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mt-4 [&_h1]:mb-2 [&_h1]:text-gray-900
            [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-4 [&_h2]:mb-2 [&_h2]:text-gray-900
            [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-3 [&_h3]:mb-1.5 [&_h3]:text-gray-900
            [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:mt-3 [&_h4]:mb-1.5 [&_h4]:text-gray-900
            [&_p]:mb-3 [&_p]:text-gray-800
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-3
            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-3
            [&_li]:mb-1
            [&_blockquote]:border-l-4 [&_blockquote]:border-red-600 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-3 [&_blockquote]:text-gray-600
            [&_table]:w-full [&_table]:border-collapse [&_table]:my-4
            [&_th]:border [&_th]:border-gray-300 [&_th]:p-2 [&_th]:bg-gray-100 [&_th]:text-left [&_th]:font-semibold
            [&_td]:border [&_td]:border-gray-300 [&_td]:p-2
            [&_a]:text-red-600 [&_a]:underline
            [&_pre]:bg-gray-900 [&_pre]:text-gray-100 [&_pre]:p-3 [&_pre]:rounded [&_pre]:my-3 [&_pre]:font-mono [&_pre]:text-xs
          "
        />
      )}
    </div>
  );
}
