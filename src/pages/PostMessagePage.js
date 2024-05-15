import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styles from "pages/PostMessagePage.module.scss";
import CustomDropdown from "components/CreateMessage/CustomDropdown";
import ProfileSelect from "components/CreateMessage/ProfileSelect";
import {
  FONT_CLASS_NAME,
  MEMBER_CLASS_NAME,
  PROFILES,
  DEFUALT_PROFILE,
} from "constants/postMessagePage";
import { useParams, useNavigate } from "react-router-dom";
import { postMessage } from "apis/recipients";

export default function PostMessageForm() {
  const [senderValue, setSenderValue] = useState("");
  const [senderError, setSenderError] = useState(false);
  const [relationship, setRelationship] = useState("지인");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const [editorError, setEditorError] = useState(false);
  const [selectedFont, setSelectedFont] = useState("Noto Sans");
  const [selectedProfile, setSelectedProfile] = useState(DEFUALT_PROFILE);
  const [editorContent, setEditorContent] = useState("");
  const [senderContent, setSenderContent] = useState("");

  // NOTE - id 받아오는 작업
  const { postId } = useParams();
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    const name = e.target.value.trim(); //NOTE 공백을 제거하여 입력값 확인
    setSenderValue(name);
    setSenderContent(name); //NOTE 보낸이 내용을 상태에 업데이트
    setSenderError(name === ""); //NOTE 공백이면 에러 상태를 true로 설정
  };

  const handleEditorChange = (state) => {
    setEditorState(state);
    const html = draftToHtml(convertToRaw(state.getCurrentContent()));
    setEditorContent(html);
    console.log(">>>>>>>>>>>" + html);
  };

  const isButtonDisabled =
    !editorState || !senderContent || senderError || editorError;

  const handleProfileSelect = (src) => {
    setSelectedProfile(src);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(">> 보내는 데이터 : " + editorContent);

    const formData = {
      team: "6-1",
      recipientId: postId,
      sender: senderValue,
      relationship: relationship,
      content: editorContent,
      font: selectedFont,
      profileImageURL: selectedProfile,
    };

    try {
      await postMessage(postId, formData);
      navigate(`/post/${postId}`); // NOTE 페이지 이동
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className={`${styles["message-form"]} ${senderError ? "error" : ""}`}
      >
        <div className={styles["message-form-sender"]}>
          <label
            htmlFor="nameInput"
            className={`${styles["message-form-title"]}`}
          >
            From.
          </label>
          <input
            onChange={handleNameChange}
            className={`${styles["message-form-inputs"]} ${
              styles["message-form-name-input"]
            } ${senderError ? styles.error : ""}`}
            id="nameInput"
            placeholder="이름을 입력해 주세요."
          />
          {senderError && (
            <p className={styles["form-error"]}>값을 입력해주세요.</p>
          )}{" "}
        </div>

        <ProfileSelect
          onProfileSelect={handleProfileSelect}
          selectedProfile={selectedProfile}
        />

        <div className={styles["message-form-relationship"]}>
          <label htmlFor="select" className={styles["message-form-title"]}>
            상대와의 관계
          </label>
          <CustomDropdown
            props={Object.keys(MEMBER_CLASS_NAME)}
            onSelect={(value) => setRelationship(value)}
          />
        </div>

        <div
          className={`${styles["message-form-content"]} ${
            editorError ? styles.error : ""
          }`}
        >
          <label htmlFor="textarea" className={styles["message-form-title"]}>
            내용을 입력해 주세요
          </label>
          <Editor
            editorState={editorState}
            onEditorStateChange={handleEditorChange}
            wrapperClassName={styles["message-form-text-editor-wrapper"]}
            editorClassName={`${styles["message-form-text-editor"]} ${
              editorError ? styles.error : ""
            }`}
            toolbar={{
              options: ["inline", "textAlign", "history"],
            }}
          />
          {editorError && (
            <p className={styles["form-error"]}>값을 입력해주세요.</p>
          )}
        </div>

        <div className={styles["message-form-font"]}>
          <span className={styles["message-form-title"]}>폰트 선택</span>
          <CustomDropdown
            props={Object.keys(FONT_CLASS_NAME)}
            onSelect={(value) => setSelectedFont(value)}
          />
        </div>
        <button
          className={`${styles["message-form-submit"]}`}
          type="submit"
          disabled={isButtonDisabled}
        >
          생성하기
        </button>
      </div>
    </form>
  );
}
