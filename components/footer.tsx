"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Globe } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="https://avatars.githubusercontent.com/u/120817762?s=200&v=4"
                alt="DishIs Technologies"
                width={32}
                height={32}
                className="rounded group-hover:scale-110 transition-transform"
              />              <span className="font-bold text-lg">DishIs Technologies</span>
            </div>
            <p className="text-gray-400 text-sm">Building powerful APIs for modern developers.</p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Products</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="https://freecustom.email"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  FreeCustom.Email
                </a>
              </li>
              <li>
                <a
                  href="https://mail.dishis.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  DITMail
                </a>
              </li>
              <li>
                <a
                  href="https://i.dishis.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Image Hosting
                </a>
              </li>
              <li>
                <a
                  href="https://rapidapi.com/organization/dishis-technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  All APIs
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/dishistech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/DishIsh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.crunchbase.com/organization/dishis-technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Crunchbase
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/DishIs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/dishistech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.f6s.com/company/dishis-technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                <Globe size={20} />
              </a>
              <a
                href="mailto:support@dishis.tech"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2022-{new Date().getFullYear()} DishIs Technologies. All rights reserved.</p>
          <p>Crafted with ❤️ for developers</p>
        </div>
      </div>
    </footer>
  )
}
