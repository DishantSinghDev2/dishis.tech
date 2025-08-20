"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChevronDown,
  Code,
  Zap,
  Shield,
  Users,
  Globe,
  Database,
  TestTube,
  Wrench,
  Cpu,
  Lock,
  ExternalLink,
  Award,
  TrendingUp,
  ArrowRight,
  Clock,
  CheckCircle,
  Heart,
  Handshake,
  Mail,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { TypewriterEffect } from "@/components/ui/typewriter-effect-improved"
import TestimonialCarousel from "@/components/testimonial-carousel"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-3 group">
                <img
                  src="/dishis-logo-transparent.png"
                  alt="DishIs Logo"
                  className="h-8 w-auto transition-transform group-hover:scale-105"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-[#1faaff] to-[#0ea5e9] bg-clip-text text-transparent group-hover:from-[#0ea5e9] group-hover:to-[#1faaff] transition-all duration-300">
                  DishIs Technologies
                </span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#tools" className="text-foreground hover:text-primary transition-colors">
                Tools
              </a>
              <a href="#team" className="text-foreground hover:text-primary transition-colors">
                Team
              </a>
              <a href="#investors" className="text-foreground hover:text-primary transition-colors">
                Investors
              </a>
              <a href="#work" className="text-foreground hover:text-primary transition-colors">
                Work
              </a>
              <a href="#blog" className="text-foreground hover:text-primary transition-colors">
                Blog
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Abstract Wave Background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <path
              d="M0,400 C300,200 600,600 900,300 C1050,150 1200,500 1200,400 L1200,800 L0,800 Z"
              fill="url(#gradient1)"
            />
            <path d="M0,500 C400,300 800,700 1200,400 L1200,800 L0,800 Z" fill="url(#gradient2)" />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-4xl text-center mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-6xl font-extrabold text-foreground leading-tight mb-6">
                DishIs <span className="text-primary">Technologies</span>
              </h1>

              <motion.h2
                key="slogan-reset"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-center"
              >
                <TypewriterEffect
                  words={[
                    {
                      text: "Do",
                      className:
                        "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent",
                    },
                    {
                      text: "It",
                      className:
                        "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent",
                    },
                    {
                      text: "Together",
                      className:
                        "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent",
                    },
                  ]}
                  className="mt-4 text-xl sm:text-2xl md:text-3xl"
                  cursorClassName="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 h-5 sm:h-6 md:h-8"
                />
              </motion.h2>

              <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-dm-sans">
                future-ready-tools-for-developers
              </p>
              <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto font-dm-sans leading-relaxed">
                Building developer-friendly tools that simplify API creation, testing, and scaling. Empowering
                developers to focus on what matters most - creating amazing software.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6">
                  Explore Our Tools
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 backdrop-blur-sm bg-transparent">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </section>

      {/* About/Mission Section */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-foreground mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground font-dm-sans max-w-3xl mx-auto">
              Transforming the developer experience through innovative tools and solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold font-space-grotesk text-card-foreground mb-4">
                    Developer-First Philosophy
                  </h3>
                  <p className="text-lg text-card-foreground/90 font-dm-sans leading-relaxed mb-6">
                    Our mission is to build developer-friendly tools that simplify API creation, testing, and scaling.
                    We believe in empowering developers with intuitive, powerful solutions that accelerate innovation
                    and reduce complexity.
                  </p>
                  <p className="text-card-foreground/80 font-dm-sans leading-relaxed">
                    Every tool we create is designed with the developer experience at its core, ensuring that complex
                    tasks become simple and productivity soars.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <Card className="backdrop-blur-md bg-card/30 border-border/50 hover:bg-card/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Code className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold font-space-grotesk text-card-foreground mb-2">Clean Code</h4>
                  <p className="text-sm text-card-foreground/80 font-dm-sans">
                    Tools that promote best practices and maintainable code
                  </p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-md bg-card/30 border-border/50 hover:bg-card/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h4 className="font-semibold font-space-grotesk text-card-foreground mb-2">Performance</h4>
                  <p className="text-sm text-card-foreground/80 font-dm-sans">
                    Lightning-fast tools that scale with your needs
                  </p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-md bg-card/30 border-border/50 hover:bg-card/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold font-space-grotesk text-card-foreground mb-2">Security</h4>
                  <p className="text-sm text-card-foreground/80 font-dm-sans">
                    Built-in security features you can trust
                  </p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-md bg-card/30 border-border/50 hover:bg-card/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h4 className="font-semibold font-space-grotesk text-card-foreground mb-2">Community</h4>
                  <p className="text-sm text-card-foreground/80 font-dm-sans">Built by developers, for developers</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Vision Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold font-space-grotesk text-card-foreground mb-6">Our Vision</h3>
                <p className="text-xl text-card-foreground/90 font-dm-sans leading-relaxed mb-6">
                  To become the go-to platform for developers seeking reliable, innovative tools that streamline their
                  workflow and enhance their productivity.
                </p>
                <p className="text-lg text-card-foreground/80 font-dm-sans leading-relaxed">
                  We envision a future where developers can focus entirely on building amazing applications, while our
                  tools handle the complexity behind the scenes.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Tools Showcase Section */}
      <section id="tools" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-foreground mb-6">Our Tools</h2>
            <p className="text-xl text-muted-foreground font-dm-sans max-w-3xl mx-auto">
              Developer-friendly tools designed to streamline your workflow and boost productivity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* API Builder Tool */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl h-full hover:bg-card/60 transition-all duration-300 group">
                <CardHeader>
                  <Globe className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="font-space-grotesk text-card-foreground text-xl">API Builder Pro</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-1">
                  <p className="text-card-foreground/80 font-dm-sans leading-relaxed mb-6">
                    Visual API design and documentation tool with real-time collaboration
                  </p>
                  <Button
                    variant="outline"
                    className="w-full backdrop-blur-sm bg-transparent border-primary/50 hover:bg-primary/10"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Explore Tool
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Database Manager Tool */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl h-full hover:bg-card/60 transition-all duration-300 group">
                <CardHeader>
                  <Database className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="font-space-grotesk text-card-foreground text-xl">DB Manager</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-1">
                  <p className="text-card-foreground/80 font-dm-sans leading-relaxed mb-6">
                    Intuitive database management with automated migrations and backups
                  </p>
                  <Button
                    variant="outline"
                    className="w-full backdrop-blur-sm bg-transparent border-accent/50 hover:bg-accent/10"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Explore Tool
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Testing Suite Tool */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl h-full hover:bg-card/60 transition-all duration-300 group">
                <CardHeader>
                  <TestTube className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="font-space-grotesk text-card-foreground text-xl">Test Suite Pro</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-1">
                  <p className="text-card-foreground/80 font-dm-sans leading-relaxed mb-6">
                    Comprehensive testing framework with automated CI/CD integration
                  </p>
                  <Button
                    variant="outline"
                    className="w-full backdrop-blur-sm bg-transparent border-primary/50 hover:bg-primary/10"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Explore Tool
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* DevOps Toolkit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl h-full hover:bg-card/60 transition-all duration-300 group">
                <CardHeader>
                  <Wrench className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="font-space-grotesk text-card-foreground text-xl">DevOps Toolkit</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-1">
                  <p className="text-card-foreground/80 font-dm-sans leading-relaxed mb-6">
                    Complete deployment and monitoring solution for modern applications
                  </p>
                  <Button
                    variant="outline"
                    className="w-full backdrop-blur-sm bg-transparent border-accent/50 hover:bg-accent/10"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Explore Tool
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Performance Monitor */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl h-full hover:bg-card/60 transition-all duration-300 group">
                <CardHeader>
                  <Cpu className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="font-space-grotesk text-card-foreground text-xl">Performance Monitor</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-1">
                  <p className="text-card-foreground/80 font-dm-sans leading-relaxed mb-6">
                    Real-time application performance monitoring and optimization insights
                  </p>
                  <Button
                    variant="outline"
                    className="w-full backdrop-blur-sm bg-transparent border-primary/50 hover:bg-primary/10"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Explore Tool
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Security Scanner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl h-full hover:bg-card/60 transition-all duration-300 group">
                <CardHeader>
                  <Lock className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="font-space-grotesk text-card-foreground text-xl">Security Scanner</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-1">
                  <p className="text-card-foreground/80 font-dm-sans leading-relaxed mb-6">
                    Automated security vulnerability detection and compliance checking
                  </p>
                  <Button
                    variant="outline"
                    className="w-full backdrop-blur-sm bg-transparent border-accent/50 hover:bg-accent/10"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Explore Tool
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-space-grotesk text-card-foreground mb-4">
                  Ready to Transform Your Development Workflow?
                </h3>
                <p className="text-card-foreground/80 font-dm-sans leading-relaxed mb-6">
                  Join thousands of developers who trust DishIs Technologies to streamline their development process.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="px-8">
                    Get Started Free
                  </Button>
                  <Button variant="outline" size="lg" className="px-8 backdrop-blur-sm bg-transparent">
                    View All Tools
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-foreground mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground font-dm-sans max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl h-full">
                <CardHeader>
                  <Award className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="font-space-grotesk text-card-foreground">Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground/80 font-dm-sans leading-relaxed">
                    We strive for excellence in every line of code, every feature, and every interaction. Quality is
                    never compromised.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl h-full">
                <CardHeader>
                  <Users className="w-12 h-12 text-accent mb-4" />
                  <CardTitle className="font-space-grotesk text-card-foreground">Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground/80 font-dm-sans leading-relaxed">
                    We believe in the power of community and collaboration. Together, we build better tools and create
                    lasting impact.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl h-full">
                <CardHeader>
                  <Zap className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="font-space-grotesk text-card-foreground">Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground/80 font-dm-sans leading-relaxed">
                    We embrace new technologies and approaches, constantly pushing the boundaries of what's possible in
                    developer tooling.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-foreground mb-6">Our Team</h2>
            <p className="text-xl text-muted-foreground font-dm-sans max-w-3xl mx-auto">
              Meet the passionate developers and innovators behind Dishis Technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl h-full hover:bg-card/60 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white font-space-grotesk">AK</span>
                  </div>
                  <h3 className="text-xl font-bold font-space-grotesk text-card-foreground mb-2">Arjun Kumar</h3>
                  <p className="text-accent font-dm-sans mb-4">Founder & CEO</p>
                  <p className="text-card-foreground/80 font-dm-sans leading-relaxed mb-6">
                    Full-stack developer with 8+ years of experience building scalable web applications and developer
                    tools.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Button variant="ghost" size="sm" className="hover:bg-primary/20">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-primary/20">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-primary/20">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl h-full hover:bg-card/60 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-primary mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white font-space-grotesk">SP</span>
                  </div>
                  <h3 className="text-xl font-bold font-space-grotesk text-card-foreground mb-2">Priya Sharma</h3>
                  <p className="text-accent font-dm-sans mb-4">CTO & Co-founder</p>
                  <p className="text-card-foreground/80 font-dm-sans leading-relaxed mb-6">
                    Systems architect specializing in distributed systems, API design, and cloud infrastructure.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Button variant="ghost" size="sm" className="hover:bg-accent/20">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-accent/20">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-accent/20">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl h-full hover:bg-card/60 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-accent to-primary mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white font-space-grotesk">RG</span>
                  </div>
                  <h3 className="text-xl font-bold font-space-grotesk text-card-foreground mb-2">Rahul Gupta</h3>
                  <p className="text-accent font-dm-sans mb-4">Lead Developer</p>
                  <p className="text-card-foreground/80 font-dm-sans leading-relaxed mb-6">
                    Frontend specialist with expertise in React, TypeScript, and modern web development frameworks.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Button variant="ghost" size="sm" className="hover:bg-primary/20">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-primary/20">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-primary/20">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Team Member 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl h-full hover:bg-card/60 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-primary mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white font-space-grotesk">AN</span>
                  </div>
                  <h3 className="text-xl font-bold font-space-grotesk text-card-foreground mb-2">Anita Nair</h3>
                  <p className="text-accent font-dm-sans mb-4">DevOps Engineer</p>
                  <p className="text-card-foreground/80 font-dm-sans leading-relaxed mb-6">
                    Infrastructure expert focused on CI/CD pipelines, containerization, and cloud deployment strategies.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Button variant="ghost" size="sm" className="hover:bg-accent/20">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-accent/20">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-accent/20">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Team Member 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl h-full hover:bg-card/60 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white font-space-grotesk">VS</span>
                  </div>
                  <h3 className="text-xl font-bold font-space-grotesk text-card-foreground mb-2">Vikram Singh</h3>
                  <p className="text-accent font-dm-sans mb-4">Product Designer</p>
                  <p className="text-card-foreground/80 font-dm-sans leading-relaxed mb-6">
                    UX/UI designer passionate about creating intuitive interfaces and exceptional user experiences.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Button variant="ghost" size="sm" className="hover:bg-primary/20">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-primary/20">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-primary/20">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Team Member 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl h-full hover:bg-card/60 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent via-primary to-accent mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white font-space-grotesk">MJ</span>
                  </div>
                  <h3 className="text-xl font-bold font-space-grotesk text-card-foreground mb-2">Maya Joshi</h3>
                  <p className="text-accent font-dm-sans mb-4">QA Engineer</p>
                  <p className="text-card-foreground/80 font-dm-sans leading-relaxed mb-6">
                    Quality assurance specialist ensuring our tools meet the highest standards of reliability and
                    performance.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Button variant="ghost" size="sm" className="hover:bg-accent/20">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-accent/20">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="hover:bg-accent/20">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Join Team CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl max-w-2xl mx-auto">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold font-space-grotesk text-card-foreground mb-4">
                  Join Our Growing Team
                </h3>
                <p className="text-card-foreground/80 font-dm-sans leading-relaxed mb-6">
                  We're always looking for talented developers, designers, and innovators to join our mission of
                  building the future of developer tools.
                </p>
                <Button size="lg" className="px-8">
                  View Open Positions
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Investor Section */}
      <section id="investors" className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-foreground mb-6">Investors</h2>
            <p className="text-xl text-muted-foreground font-dm-sans max-w-3xl mx-auto">
              Building the future through strategic partnerships and sustainable growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl">
                <CardContent className="p-12 text-center">
                  <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-3xl font-bold font-space-grotesk text-card-foreground mb-6">
                    We are proudly bootstrapped
                  </h3>
                  <p className="text-lg text-card-foreground/90 font-dm-sans leading-relaxed mb-8">
                    DishIs Technologies has been built from the ground up with our own resources and revenue from our
                    growing customer base. This approach allows us to maintain complete control over our vision and
                    prioritize long-term value creation over short-term gains.
                  </p>
                  <p className="text-card-foreground/80 font-dm-sans leading-relaxed">
                    Our bootstrapped journey has taught us the importance of sustainable growth, customer-centric
                    development, and building products that truly solve real-world problems for developers.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card className="backdrop-blur-md bg-card/30 border-border/50 hover:bg-card/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Zap className="w-8 h-8 text-accent mr-4" />
                    <h4 className="text-xl font-bold font-space-grotesk text-card-foreground">Self-Funded Growth</h4>
                  </div>
                  <p className="text-card-foreground/80 font-dm-sans leading-relaxed">
                    Every feature, every hire, and every expansion has been funded through our own revenue, ensuring
                    sustainable and organic growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-md bg-card/30 border-border/50 hover:bg-card/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Shield className="w-8 h-8 text-primary mr-4" />
                    <h4 className="text-xl font-bold font-space-grotesk text-card-foreground">Independent Vision</h4>
                  </div>
                  <p className="text-card-foreground/80 font-dm-sans leading-relaxed">
                    Being bootstrapped means we answer only to our customers and our mission, not external investors
                    with different priorities.
                  </p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-md bg-card/30 border-border/50 hover:bg-card/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Award className="w-8 h-8 text-accent mr-4" />
                    <h4 className="text-xl font-bold font-space-grotesk text-card-foreground">Long-term Focus</h4>
                  </div>
                  <p className="text-card-foreground/80 font-dm-sans leading-relaxed">
                    Our decisions are driven by long-term value creation and building lasting relationships with our
                    developer community.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Partnership CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl max-w-3xl mx-auto">
              <CardContent className="p-12">
                <Handshake className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-3xl font-bold font-space-grotesk text-card-foreground mb-6">
                  Interested in Partnership?
                </h3>
                <p className="text-xl text-card-foreground/90 font-dm-sans leading-relaxed mb-8">
                  While we're proudly bootstrapped, we're always open to strategic partnerships that align with our
                  mission and values. If you're interested in collaborating or exploring partnership opportunities, we'd
                  love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="px-8">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Us
                  </Button>
                  <Button variant="outline" size="lg" className="px-8 backdrop-blur-sm bg-transparent">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-foreground mb-6">Case Studies</h2>
            <p className="text-xl text-muted-foreground font-dm-sans max-w-3xl mx-auto">
              Real projects, real results. See how our tools have transformed development workflows for teams worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Case Study 1 - Featured */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl hover:bg-card/60 transition-all duration-300 group">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mr-4">
                        <TrendingUp className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-sm font-semibold text-accent font-dm-sans uppercase tracking-wide">
                        Featured Case Study
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold font-space-grotesk text-card-foreground mb-4">
                      E-commerce Platform Optimization
                    </h3>
                    <p className="text-lg text-card-foreground/90 font-dm-sans leading-relaxed mb-6">
                      How TechCorp reduced their API response times by 75% and improved developer productivity using our
                      API Builder Pro and Performance Monitor tools.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-2xl font-bold text-primary font-space-grotesk">75%</div>
                        <div className="text-sm text-card-foreground/80 font-dm-sans">Faster API Response</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-accent font-space-grotesk">3x</div>
                        <div className="text-sm text-card-foreground/80 font-dm-sans">Developer Productivity</div>
                      </div>
                    </div>
                    <Button className="group-hover:translate-x-1 transition-transform duration-300">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                  <div className="relative overflow-hidden rounded-r-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm"></div>
                    <div className="p-8 lg:p-12 h-full flex items-center justify-center">
                      <div className="text-center">
                        <Globe className="w-24 h-24 text-card-foreground/60 mx-auto mb-4" />
                        <p className="text-card-foreground/80 font-dm-sans">Interactive Demo Available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Case Study 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl h-full hover:bg-card/60 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Database className="w-8 h-8 text-accent mr-3" />
                    <span className="text-sm font-semibold text-muted-foreground font-dm-sans uppercase tracking-wide">
                      Database Migration
                    </span>
                  </div>
                  <CardTitle className="font-space-grotesk text-card-foreground text-xl">
                    FinTech Startup Migration
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-1">
                  <div>
                    <p className="text-card-foreground/80 font-dm-sans leading-relaxed mb-6">
                      Seamlessly migrated a fintech startup's legacy database to a modern cloud infrastructure using our
                      DB Manager tool, reducing downtime to zero.
                    </p>
                    <div className="flex items-center space-x-6 mb-6">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm text-card-foreground/80 font-dm-sans">2 weeks</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-accent mr-2" />
                        <span className="text-sm text-card-foreground/80 font-dm-sans">Zero downtime</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full backdrop-blur-sm bg-transparent border-accent/50 hover:bg-accent/10 group-hover:translate-y-[-2px] transition-all duration-300"
                  >
                    View Case Study
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Case Study 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl h-full hover:bg-card/60 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <TestTube className="w-8 h-8 text-primary mr-3" />
                    <span className="text-sm font-semibold text-muted-foreground font-dm-sans uppercase tracking-wide">
                      Testing Automation
                    </span>
                  </div>
                  <CardTitle className="font-space-grotesk text-card-foreground text-xl">
                    Healthcare Platform Testing
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-1">
                  <div>
                    <p className="text-card-foreground/80 font-dm-sans leading-relaxed mb-6">
                      Implemented comprehensive testing automation for a healthcare platform, achieving 95% test
                      coverage and reducing manual testing time by 80%.
                    </p>
                    <div className="flex items-center space-x-6 mb-6">
                      <div className="flex items-center">
                        <Shield className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm text-card-foreground/80 font-dm-sans">95% coverage</span>
                      </div>
                      <div className="flex items-center">
                        <Zap className="w-4 h-4 text-accent mr-2" />
                        <span className="text-sm text-card-foreground/80 font-dm-sans">80% time saved</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full backdrop-blur-sm bg-transparent border-primary/50 hover:bg-primary/10 group-hover:translate-y-[-2px] transition-all duration-300"
                  >
                    View Case Study
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Case Study 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl h-full hover:bg-card/60 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Wrench className="w-8 h-8 text-accent mr-3" />
                    <span className="text-sm font-semibold text-muted-foreground font-dm-sans uppercase tracking-wide">
                      DevOps Transformation
                    </span>
                  </div>
                  <CardTitle className="font-space-grotesk text-card-foreground text-xl">Media Company CI/CD</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-1">
                  <div>
                    <p className="text-card-foreground/80 font-dm-sans leading-relaxed mb-6">
                      Transformed a media company's deployment process with our DevOps Toolkit, reducing deployment time
                      from hours to minutes while improving reliability.
                    </p>
                    <div className="flex items-center space-x-6 mb-6">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm text-card-foreground/80 font-dm-sans">5 min deploys</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-accent mr-2" />
                        <span className="text-sm text-card-foreground/80 font-dm-sans">99.9% uptime</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full backdrop-blur-sm bg-transparent border-accent/50 hover:bg-accent/10 group-hover:translate-y-[-2px] transition-all duration-300"
                  >
                    View Case Study
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Case Study 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl h-full hover:bg-card/60 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Lock className="w-8 h-8 text-primary mr-3" />
                    <span className="text-sm font-semibold text-muted-foreground font-dm-sans uppercase tracking-wide">
                      Security Audit
                    </span>
                  </div>
                  <CardTitle className="font-space-grotesk text-card-foreground text-xl">
                    Banking Security Overhaul
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-1">
                  <div>
                    <p className="text-card-foreground/80 font-dm-sans leading-relaxed mb-6">
                      Conducted comprehensive security audit for a regional bank using our Security Scanner, identifying
                      and resolving 50+ vulnerabilities.
                    </p>
                    <div className="flex items-center space-x-6 mb-6">
                      <div className="flex items-center">
                        <Shield className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm text-card-foreground/80 font-dm-sans">50+ fixes</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 text-accent mr-2" />
                        <span className="text-sm text-card-foreground/80 font-dm-sans">Compliant</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full backdrop-blur-sm bg-transparent border-primary/50 hover:bg-primary/10 group-hover:translate-y-[-2px] transition-all duration-300"
                  >
                    View Case Study
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Results Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold font-space-grotesk text-card-foreground mb-8">
                  Proven Results Across Industries
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary font-space-grotesk mb-2">500+</div>
                    <div className="text-card-foreground/80 font-dm-sans">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent font-space-grotesk mb-2">95%</div>
                    <div className="text-card-foreground/80 font-dm-sans">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary font-space-grotesk mb-2">60%</div>
                    <div className="text-card-foreground/80 font-dm-sans">Avg. Time Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent font-space-grotesk mb-2">24/7</div>
                    <div className="text-card-foreground/80 font-dm-sans">Support Available</div>
                  </div>
                </div>
                <p className="text-lg text-card-foreground/90 font-dm-sans leading-relaxed mb-8">
                  From startups to enterprise companies, our tools have consistently delivered measurable improvements
                  in development efficiency, system reliability, and team productivity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="px-8">
                    Start Your Success Story
                  </Button>
                  <Button variant="outline" size="lg" className="px-8 backdrop-blur-sm bg-transparent">
                    View All Case Studies
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground font-dm-sans max-w-3xl mx-auto">
              Trusted by developers and teams worldwide to streamline their workflows and boost productivity
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="backdrop-blur-md bg-card/40 border border-border/50 shadow-xl rounded-2xl">
              <TestimonialCarousel />
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-space-grotesk mb-2">4.9</div>
                <div className="text-sm text-muted-foreground font-dm-sans">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent font-space-grotesk mb-2">200+</div>
                <div className="text-sm text-muted-foreground font-dm-sans">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-space-grotesk mb-2">98%</div>
                <div className="text-sm text-muted-foreground font-dm-sans">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent font-space-grotesk mb-2">24/7</div>
                <div className="text-sm text-muted-foreground font-dm-sans">Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Portfolio Section */}
      <section id="work" className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-foreground mb-6">Our Work</h2>
            <p className="text-xl text-muted-foreground font-dm-sans max-w-3xl mx-auto">
              A showcase of our past and ongoing projects, demonstrating our expertise across various industries and
              technologies.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button variant="default" className="px-6">
              All Projects
            </Button>
            <Button variant="outline" className="px-6 backdrop-blur-sm bg-transparent">
              Web Applications
            </Button>
            <Button variant="outline" className="px-6 backdrop-blur-sm bg-transparent">
              API Development
            </Button>
            <Button variant="outline" className="px-6 backdrop-blur-sm bg-transparent">
              DevOps
            </Button>
            <Button variant="outline" className="px-6 backdrop-blur-sm bg-transparent">
              Mobile Apps
            </Button>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Project 1 - Featured */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-2"
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl h-full hover:bg-card/60 transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg h-64">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-sm"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe className="w-20 h-20 text-card-foreground/60" />
                  </div>
                  <img
                    src="/modern-ecommerce-dashboard.png"
                    alt="Modern E-commerce Dashboard"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-accent font-dm-sans uppercase tracking-wide">
                      Featured Project
                    </span>
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                      Completed
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-space-grotesk text-card-foreground mb-4">
                    Modern E-commerce Platform
                  </h3>
                  <p className="text-card-foreground/80 font-dm-sans leading-relaxed mb-6">
                    A comprehensive e-commerce solution built with Next.js, featuring real-time inventory management,
                    advanced analytics, and seamless payment integration. Handles 10M+ transactions monthly.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                      TypeScript
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      PostgreSQL
                    </span>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                      Stripe
                    </span>
                  </div>
                  <Button className="group-hover:translate-x-1 transition-transform duration-300">
                    View Project Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl h-full hover:bg-card/60 transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg h-48">
                  <img
                    src="/mobile-banking-app.png"
                    alt="Mobile Banking Application"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-muted-foreground font-dm-sans uppercase tracking-wide">
                      Mobile App
                    </span>
                    <span className="px-2 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">
                      In Progress
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-space-grotesk text-card-foreground mb-3">Banking Mobile App</h3>
                  <p className="text-card-foreground/80 font-dm-sans text-sm leading-relaxed mb-4">
                    Secure mobile banking application with biometric authentication and real-time transaction
                    monitoring.
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">React Native</span>
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">Node.js</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full backdrop-blur-sm bg-transparent">
                    <ExternalLink className="w-3 h-3 mr-2" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl h-full hover:bg-card/60 transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg h-48">
                  <img
                    src="/ai-analytics-dashboard.png"
                    alt="AI Analytics Dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-muted-foreground font-dm-sans uppercase tracking-wide">
                      AI Platform
                    </span>
                    <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                      Completed
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-space-grotesk text-card-foreground mb-3">
                    AI Analytics Dashboard
                  </h3>
                  <p className="text-card-foreground/80 font-dm-sans text-sm leading-relaxed mb-4">
                    Advanced analytics platform powered by machine learning for predictive business insights.
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Python</span>
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">TensorFlow</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full backdrop-blur-sm bg-transparent">
                    <ExternalLink className="w-3 h-3 mr-2" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl h-full hover:bg-card/60 transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg h-48">
                  <img
                    src="/logistics-tracking-platform.png"
                    alt="Logistics Tracking Platform"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-muted-foreground font-dm-sans uppercase tracking-wide">
                      Web Platform
                    </span>
                    <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                      Completed
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-space-grotesk text-card-foreground mb-3">Logistics Tracking</h3>
                  <p className="text-card-foreground/80 font-dm-sans text-sm leading-relaxed mb-4">
                    Real-time package tracking system with GPS integration and automated notifications.
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Vue.js</span>
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">Express</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full backdrop-blur-sm bg-transparent">
                    <ExternalLink className="w-3 h-3 mr-2" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl h-full hover:bg-card/60 transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg h-48">
                  <img
                    src="/education-learning-platform.png"
                    alt="Education Learning Platform"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-muted-foreground font-dm-sans uppercase tracking-wide">
                      EdTech Platform
                    </span>
                    <span className="px-2 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">
                      In Progress
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-space-grotesk text-card-foreground mb-3">
                    Learning Management
                  </h3>
                  <p className="text-card-foreground/80 font-dm-sans text-sm leading-relaxed mb-4">
                    Comprehensive LMS with interactive courses, progress tracking, and collaborative features.
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">React</span>
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">GraphQL</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full backdrop-blur-sm bg-transparent">
                    <ExternalLink className="w-3 h-3 mr-2" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl h-full hover:bg-card/60 transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-sm flex items-center justify-center">
                    <Database className="w-16 h-16 text-card-foreground/60" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-muted-foreground font-dm-sans uppercase tracking-wide">
                      API Development
                    </span>
                    <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                      Completed
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-space-grotesk text-card-foreground mb-3">
                    Enterprise API Suite
                  </h3>
                  <p className="text-card-foreground/80 font-dm-sans text-sm leading-relaxed mb-4">
                    Scalable REST API architecture serving 1M+ requests daily with comprehensive documentation.
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">FastAPI</span>
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">Docker</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full backdrop-blur-sm bg-transparent">
                    <ExternalLink className="w-3 h-3 mr-2" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Portfolio CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-space-grotesk text-card-foreground mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-card-foreground/80 font-dm-sans leading-relaxed mb-6">
                  Let's discuss how we can bring your vision to life with our expertise and cutting-edge tools.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="px-8">
                    Start a Project
                  </Button>
                  <Button variant="outline" size="lg" className="px-8 backdrop-blur-sm bg-transparent">
                    View All Work
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-foreground mb-6">
              Latest from Our Blog
            </h2>
            <p className="text-xl text-muted-foreground font-dm-sans max-w-3xl mx-auto">
              Insights, tutorials, and thoughts on the future of developer tools and technology
            </p>
          </motion.div>

          {/* Featured Blog Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl hover:bg-card/60 transition-all duration-300 group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden rounded-l-lg h-64 lg:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-sm"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code className="w-20 h-20 text-card-foreground/60" />
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full mr-4">
                      Featured
                    </span>
                    <span className="text-sm text-card-foreground/60 font-dm-sans">December 15, 2024</span>
                  </div>
                  <h3 className="text-3xl font-bold font-space-grotesk text-card-foreground mb-4">
                    The Future of API Development: Trends to Watch in 2025
                  </h3>
                  <p className="text-lg text-card-foreground/80 font-dm-sans leading-relaxed mb-6">
                    Explore the emerging trends that will shape API development in 2025, from GraphQL federation to
                    AI-powered API generation and the rise of event-driven architectures.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mr-3">
                        <span className="text-sm font-bold text-white font-space-grotesk">AK</span>
                      </div>
                      <div>
                        <p className="font-semibold text-card-foreground font-space-grotesk">Arjun Kumar</p>
                        <p className="text-sm text-card-foreground/60 font-dm-sans">Founder & CEO</p>
                      </div>
                    </div>
                    <Button className="group-hover:translate-x-1 transition-transform duration-300">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Blog Post 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl h-full hover:bg-card/60 transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 backdrop-blur-sm flex items-center justify-center">
                    <TestTube className="w-16 h-16 text-card-foreground/60" />
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">
                        Tutorial
                      </span>
                      <span className="text-sm text-card-foreground/60 font-dm-sans">Dec 10, 2024</span>
                    </div>
                    <h3 className="text-xl font-bold font-space-grotesk text-card-foreground mb-3">
                      Building Robust Test Suites with Our Testing Framework
                    </h3>
                    <p className="text-card-foreground/80 font-dm-sans leading-relaxed mb-4">
                      A comprehensive guide to setting up automated testing pipelines that catch bugs before they reach
                      production.
                    </p>
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mr-3">
                        <span className="text-xs font-bold text-white font-space-grotesk">PS</span>
                      </div>
                      <span className="text-sm text-card-foreground/80 font-dm-sans">Priya Sharma</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full backdrop-blur-sm bg-transparent group-hover:translate-y-[-2px] transition-all duration-300"
                  >
                    Read More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Blog Post 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl h-full hover:bg-card/60 transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-sm flex items-center justify-center">
                    <Wrench className="w-16 h-16 text-card-foreground/60" />
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                        DevOps
                      </span>
                      <span className="text-sm text-card-foreground/60 font-dm-sans">Dec 8, 2024</span>
                    </div>
                    <h3 className="text-xl font-bold font-space-grotesk text-card-foreground mb-3">
                      Streamlining CI/CD Pipelines for Modern Applications
                    </h3>
                    <p className="text-card-foreground/80 font-dm-sans leading-relaxed mb-4">
                      Learn how to optimize your deployment workflows and reduce time-to-production with our DevOps
                      toolkit.
                    </p>
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mr-3">
                        <span className="text-xs font-bold text-white font-space-grotesk">AN</span>
                      </div>
                      <span className="text-sm text-card-foreground/80 font-dm-sans">Anita Nair</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full backdrop-blur-sm bg-transparent group-hover:translate-y-[-2px] transition-all duration-300"
                  >
                    Read More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Blog Post 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl h-full hover:bg-card/60 transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 backdrop-blur-sm flex items-center justify-center">
                    <Lock className="w-16 h-16 text-card-foreground/60" />
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">
                        Security
                      </span>
                      <span className="text-sm text-card-foreground/60 font-dm-sans">Dec 5, 2024</span>
                    </div>
                    <h3 className="text-xl font-bold font-space-grotesk text-card-foreground mb-3">
                      Essential Security Practices for API Development
                    </h3>
                    <p className="text-card-foreground/80 font-dm-sans leading-relaxed mb-4">
                      Protect your APIs from common vulnerabilities with these proven security strategies and best
                      practices.
                    </p>
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mr-3">
                        <span className="text-xs font-bold text-white font-space-grotesk">RG</span>
                      </div>
                      <span className="text-sm text-card-foreground/80 font-dm-sans">Rahul Gupta</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full backdrop-blur-sm bg-transparent group-hover:translate-y-[-2px] transition-all duration-300"
                  >
                    Read More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Blog Post 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl h-full hover:bg-card/60 transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-sm flex items-center justify-center">
                    <Database className="w-16 h-16 text-card-foreground/60" />
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                        Database
                      </span>
                      <span className="text-sm text-card-foreground/60 font-dm-sans">Dec 3, 2024</span>
                    </div>
                    <h3 className="text-xl font-bold font-space-grotesk text-card-foreground mb-3">
                      Database Migration Strategies That Actually Work
                    </h3>
                    <p className="text-card-foreground/80 font-dm-sans leading-relaxed mb-4">
                      Avoid common pitfalls and ensure zero-downtime migrations with these battle-tested strategies.
                    </p>
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mr-3">
                        <span className="text-xs font-bold text-white font-space-grotesk">VS</span>
                      </div>
                      <span className="text-sm text-card-foreground/80 font-dm-sans">Vikram Singh</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full backdrop-blur-sm bg-transparent group-hover:translate-y-[-2px] transition-all duration-300"
                  >
                    Read More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Blog Post 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl h-full hover:bg-card/60 transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 backdrop-blur-sm flex items-center justify-center">
                    <Cpu className="w-16 h-16 text-card-foreground/60" />
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">
                        Performance
                      </span>
                      <span className="text-sm text-card-foreground/60 font-dm-sans">Nov 30, 2024</span>
                    </div>
                    <h3 className="text-xl font-bold font-space-grotesk text-card-foreground mb-3">
                      Monitoring Application Performance at Scale
                    </h3>
                    <p className="text-card-foreground/80 font-dm-sans leading-relaxed mb-4">
                      Implement comprehensive monitoring solutions that help you identify and resolve performance
                      bottlenecks.
                    </p>
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mr-3">
                        <span className="text-xs font-bold text-white font-space-grotesk">MJ</span>
                      </div>
                      <span className="text-sm text-card-foreground/80 font-dm-sans">Maya Joshi</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full backdrop-blur-sm bg-transparent group-hover:translate-y-[-2px] transition-all duration-300"
                  >
                    Read More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Blog Post 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl h-full hover:bg-card/60 transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-sm flex items-center justify-center">
                    <Users className="w-16 h-16 text-card-foreground/60" />
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                        Team
                      </span>
                      <span className="text-sm text-card-foreground/60 font-dm-sans">Nov 28, 2024</span>
                    </div>
                    <h3 className="text-xl font-bold font-space-grotesk text-card-foreground mb-3">
                      Building High-Performance Development Teams
                    </h3>
                    <p className="text-card-foreground/80 font-dm-sans leading-relaxed mb-4">
                      Insights on creating collaborative environments that foster innovation and accelerate development
                      cycles.
                    </p>
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mr-3">
                        <span className="text-xs font-bold text-white font-space-grotesk">AK</span>
                      </div>
                      <span className="text-sm text-card-foreground/80 font-dm-sans">Arjun Kumar</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full backdrop-blur-sm bg-transparent group-hover:translate-y-[-2px] transition-all duration-300"
                  >
                    Read More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Blog Categories & Newsletter */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl h-full">
                <CardHeader>
                  <CardTitle className="font-space-grotesk text-card-foreground">Explore by Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="justify-start backdrop-blur-sm bg-transparent">
                      <Code className="w-4 h-4 mr-2" />
                      Development
                    </Button>
                    <Button variant="outline" className="justify-start backdrop-blur-sm bg-transparent">
                      <Wrench className="w-4 h-4 mr-2" />
                      DevOps
                    </Button>
                    <Button variant="outline" className="justify-start backdrop-blur-sm bg-transparent">
                      <Lock className="w-4 h-4 mr-2" />
                      Security
                    </Button>
                    <Button variant="outline" className="justify-start backdrop-blur-sm bg-transparent">
                      <TestTube className="w-4 h-4 mr-2" />
                      Testing
                    </Button>
                    <Button variant="outline" className="justify-start backdrop-blur-sm bg-transparent">
                      <Database className="w-4 h-4 mr-2" />
                      Database
                    </Button>
                    <Button variant="outline" className="justify-start backdrop-blur-sm bg-transparent">
                      <Cpu className="w-4 h-4 mr-2" />
                      Performance
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl h-full">
                <CardHeader>
                  <CardTitle className="font-space-grotesk text-card-foreground">Stay Updated</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground/80 font-dm-sans leading-relaxed mb-6">
                    Get the latest insights, tutorials, and product updates delivered straight to your inbox. Join our
                    community of developers building the future.
                  </p>
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-2 rounded-lg bg-background/50 border border-border/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                      <Button>Subscribe</Button>
                    </div>
                    <p className="text-xs text-card-foreground/60 font-dm-sans">
                      No spam, unsubscribe at any time. We respect your privacy.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Blog CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Card className="backdrop-blur-md bg-card/40 border-border/50 shadow-xl max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-space-grotesk text-card-foreground mb-4">Want to Contribute?</h3>
                <p className="text-card-foreground/80 font-dm-sans leading-relaxed mb-6">
                  We're always looking for guest writers and contributors to share their expertise with our community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="px-8">
                    <Mail className="w-4 h-4 mr-2" />
                    Write for Us
                  </Button>
                  <Button variant="outline" size="lg" className="px-8 backdrop-blur-sm bg-transparent">
                    View All Posts
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/40 backdrop-blur-md border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <img src="/dishis-logo-transparent.png" alt="DishIs Logo" className="h-6 w-auto mr-3" />
                <span className="text-2xl font-bold font-space-grotesk text-primary">DishIs Technologies</span>
              </div>
              <p className="text-muted-foreground font-dm-sans leading-relaxed mb-6 max-w-md">
                Building developer-friendly tools that simplify API creation, testing, and scaling. Empowering
                developers to focus on what matters most - creating amazing software.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="hover:bg-primary/20">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="hover:bg-primary/20">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="hover:bg-primary/20">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="hover:bg-primary/20">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold font-space-grotesk text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-dm-sans">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#tools" className="text-muted-foreground hover:text-primary transition-colors font-dm-sans">
                    Our Tools
                  </a>
                </li>
                <li>
                  <a href="#team" className="text-muted-foreground hover:text-primary transition-colors font-dm-sans">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#work" className="text-muted-foreground hover:text-primary transition-colors font-dm-sans">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-muted-foreground hover:text-primary transition-colors font-dm-sans">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold font-space-grotesk text-foreground mb-4">Support</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-dm-sans">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-dm-sans">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-dm-sans">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-dm-sans">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-dm-sans">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground font-dm-sans text-sm">
                © 2024 DishIs Technologies. All rights reserved.
              </p>
              <p className="text-muted-foreground font-dm-sans text-sm mt-4 md:mt-0">
                Made with <Heart className="w-4 h-4 inline text-primary" /> for developers worldwide
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
