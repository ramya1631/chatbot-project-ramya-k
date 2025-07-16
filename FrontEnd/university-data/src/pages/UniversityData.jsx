import { useState } from "react";
import Content from "../components/Content";
import AboutImg from "../assets/img_7.png";
import "./UniversityData.css";

function UniversityData() {
  const [universities, setUniversities] = useState([
    { id: 1, name: "LaunchCode Tech", location: "St. Louis, MO", students: 5000 },
    { id: 2, name: "Code University", location: "San Francisco, CA", students: 7000 },
    { id: 3, name: "Tech Valley College", location: "Austin, TX", students: 6200 },
    { id: 4, name: "Future Minds Institute", location: "Boston, MA", students: 4300 },
    { id: 5, name: "InnovateU", location: "Seattle, WA", students: 5100 },
    { id: 6, name: "Global Tech University", location: "New York, NY", students: 8800 },
    { id: 7, name: "NextGen College", location: "Denver, CO", students: 3600 },
    { id: 8, name: "Silicon State University", location: "Palo Alto, CA", students: 7400 },
   ]);

  const [form, setForm] = useState({ id: null, name: "", location: "", students: "" });
  const [isEditing, setIsEditing] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit for add/edit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.location || !form.students) return;

    if (isEditing) {
      setUniversities(universities.map((uni) => (uni.id === form.id ? { ...form, students: parseInt(form.students) } : uni)));
      setIsEditing(false);
    } else {
      const newUniversity = {
        ...form,
        id: Date.now(),
        students: parseInt(form.students),
      };
      setUniversities([...universities, newUniversity]);
    }

    setForm({ id: null, name: "", location: "", students: "" });
  };

  // Edit a university
  const handleEdit = (uni) => {
    setForm(uni);
    setIsEditing(true);
  };

  // Delete a university
  const handleDelete = (id) => {
    setUniversities(universities.filter((uni) => uni.id !== id));
  };

  return (
    <>
      <Content
        contentImg={AboutImg}
        cName="cont-mid"
        title="University Information"
        btnClass="hide"
      />

      <div className="page university-data-page">
        <p>
          LaunchCode University offers high-quality, career-focused education that blends technical training with real-world experience. Our inclusive environment helps students grow academically and professionally.
        </p>

        <h2>Partner Universities</h2>
        <table className="university-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Students</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {universities.map((uni) => (
              <tr key={uni.id}>
                <td>{uni.name}</td>
                <td>{uni.location}</td>
                <td>{uni.students}</td>
                <td>
                  <button onClick={() => handleEdit(uni)}>Edit</button>
                  <button onClick={() => handleDelete(uni.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>{isEditing ? "Edit University" : "Add University"}</h3>
        <form onSubmit={handleSubmit} className="university-form">
          <input
            type="text"
            name="name"
            placeholder="University Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
          />
          <input
            type="number"
            name="students"
            placeholder="No. of Students"
            value={form.students}
            onChange={handleChange}
          />
          <button type="submit">{isEditing ? "Update" : "Add"}</button>
        </form>
      </div>
    </>
  );
}

export default UniversityData;