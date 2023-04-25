import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";
import { SetStateAction, useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import axios from "axios";

export const Heading = () => {
const [showWaitingList, setShowWaitingList] = useState(false);
const [email, setEmail] = useState("");
const [isSubmitted, setIsSubmitted] = useState(false);

const handleEmailChange = (event: {
target: { value: SetStateAction<string> };
}) => {
setEmail(event.target.value);
};

const handleSubmit = async (event: { preventDefault: () => void }) => {
event.preventDefault();
try {
const response = await axios.post("https://example.com/endpoint", {
email: email,
});
if (response.status === 200) {
setIsSubmitted(true);
setTimeout(() => {
setShowWaitingList(false);
}, 3000);
}
} catch (error) {
console.log(error);
}
};

const handleMakeYourOwnClick = () => {
setShowWaitingList(true);
};

const handleCloseClick = () => {
const waitingList = document.querySelector(".waitingList")!;
waitingList.classList.add("fade-out");
setTimeout(() => {
setShowWaitingList(false);
}, 700);
};

return (
<header className={styles.heading}>
<MyLinks />
<div className={styles.buttonholder}>
<OutlineButton onClick={() => window.open("/fake_resume.pdf")}>
My resume
</OutlineButton>
<button
       className={styles.outlineButton2}
       onClick={handleMakeYourOwnClick}
     >
Make Your Own
</button>
{showWaitingList && (
<div className="waitingList">
<button className="mdclose" onClick={handleCloseClick}>
<MdClose />
</button>
<h2 className="waitingList__header">
Join the Waiting List for &quot;Make Your Own&quot;
</h2>
{isSubmitted ? (
<p>Thank you for signing up!</p>
) : (
<>
<p>
Enter your email below to be notified when the feature is
fully developed.
</p>
<form onSubmit={handleSubmit}>
<input
                 className="waitingList__input"
                 type="email"
                 placeholder="Enter your email"
                 value={email}
                 onChange={handleEmailChange}
               />
<button className="waitingList__button" type="submit">
{isSubmitted ? "Submitted" : "Sign up"}
</button>
</form>
</>
)}
</div>
)}
</div>
</header>
);
};