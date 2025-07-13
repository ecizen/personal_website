import { Github, Linkedin, Twitter } from "lucide-react";
const socials = [
  {
    name: "GitHub",
    href: "https://github.com/ecizen",
    icon: <Github className="w-6 h-6" />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/hardiek-tatendra1",
    icon: <Linkedin className="w-6 h-6" />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/yourusername",
    icon: <Twitter className="w-6 h-6" />,
  },
];
const ContactMe = () => {
  return (
    <div className="w-full bg-neutral-950 lg:py-12 py-6 px-4 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl text-white font-semibold">Contact Me</h1>
        <p className="text-sm text-white text-center mt-2">
          If you are interested in collaborating or have a project idea mind,
          feel free to reach out
        </p>
        <div className="flex gap-6 mt-8">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform text-white/70 hover:text-white"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ContactMe;
