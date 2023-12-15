import mongoose from "mongoose";

const projectsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  sector: {
    type: String,
    required: true,
    // unique: true
  },
  type: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  tech: {
    type: Array,
    required: true
  },
  imageLink: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

// projectsSchema.pre('save', async function (next) {
//   if(!this.isModified('password')) {
//     next()
//   }

//   const salt = await bcrypt.genSalt(10)
//   this.password = await bcrypt.hash(this.password, salt)
// })

// projectsSchema.methods.matchPasswords = async function (enteredPassword) {
//   console.log(this.password)
//   return await bcrypt.compare(enteredPassword, this.password)
// }


const Projects = mongoose.model('Projects', projectsSchema)

export default Projects;
