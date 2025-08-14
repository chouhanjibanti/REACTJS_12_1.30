Task 1.  – Registration Form (Controlled Component)

Objective: Build a registration form using controlled components with three fields.

Requirements:

A. Create a form with:
 Username (input type="text")
 Email (input type="email")
 Password (input type="password")

B. Use useState to store and update the form values.
C. Display the entered data live below the form as the user types.
D. When the user clicks Register:

   If all three fields are filled, show:  -> Register Successful! -> in green text below the form.
   If any field is empty, show: -> Please fill in all fields. -> in red text.

E. After a successful Register, clear all input fields.


Extra Validations :- 
Add simple email format validation (@ and . required).

Hide the password in the live display (replace with ****).



const[formData , setFormData] = useState({
    username : "",
    email:"",
    password :""
})


const[message , setMessage] = useState("")
const[messageColor , setMessageColor] = useState("")



