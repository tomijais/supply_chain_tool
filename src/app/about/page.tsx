import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";


import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import bcorp from '../b-corp.png'
import planet from '../1planet.png'
import blue from '../blue.png'


import matias from '../matias.jpeg'
import jacobo from '../jacobo.jpeg'
import tomas from '../tomas.jpeg'
import nicole from '../nicole.jpeg'
import santi from '../santi.jpeg'
import angi from '../angi.jpeg'
import sara from '../sara.jpeg'
import sofia from '../sofia.jpeg'
import jona from '../jona.jpeg'
import fair from '../fair.png'

// SEO optimization
export const metadata = {
  title: "About CABRA - Our Story, Mission, and Team",
  description:
    "Learn about CABRA's journey in sustainable outdoor apparel and equipment. Discover our mission, values, and the team behind our eco-friendly products.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Header */}
      <header className="bg-green-600 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            CABRA
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About CABRA</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Embracing the outdoors sustainably since 2010. Our journey from a
            small Albuquerque startup to a leader in eco-friendly outdoor gear.
          </p>
        </section>

        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4">
                CABRA was founded in 2010 by avid hikers Maria Sanchez and John
                Doe in Albuquerque, New Mexico, driven by a passion for the
                outdoors and a commitment to environmental stewardship.
                Frustrated by the lack of sustainable outdoor gear options, they
                created eco-friendly products designed to endure the rugged
                landscapes of New Mexico while minimizing environmental impact.
              </p>
              <p className="mb-4">
                A core part of our mission is the reforestation of the
                endangered New Mexican agave, a plant vital to the region’s
                ecosystem and cultural heritage. By promoting its conservation,
                we aim to restore biodiversity and protect this native species
                for future generations.
              </p>
              <p>
                Our mission is clear: inspire adventure while promoting
                sustainability. Over the years, CABRA has grown into a
                nationally recognized brand, but our dedication to quality,
                environmental responsibility, and the preservation of New
                Mexico’s natural beauty has never wavered.
              </p>
            </div>
            <Image
              src="/about-story.jpg"
              alt="CABRA founders in the New Mexico wilderness"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* Our Mission */}
        <section className="mb-16 bg-green-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
          <p className="text-xl text-center max-w-3xl mx-auto">
            At CABRA, our mission is to provide outdoor enthusiasts with
            sustainable, high-performance gear while minimizing our
            environmental impact. We believe that exploring nature and
            preserving it go hand in hand.
          </p>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Sustainability",
                description:
                  "We use eco-friendly materials and processes in all our products.",
                icon: "🌱",
              },
              {
                title: "Quality",
                description:
                  "Our gear is built to last, reducing waste and providing value to our customers.",
                icon: "⭐",
              },
              {
                title: "Innovation",
                description:
                  "We constantly seek new ways to improve our products and reduce our environmental footprint.",
                icon: "💡",
              },
              {
                title: "Community",
                description:
                  "We support local communities and encourage responsible outdoor recreation.",
                icon: "🤝",
              },
              {
                title: "Transparency",
                description:
                  "We're open about our practices and always strive to do better.",
                icon: "🔍",
              },
              {
                title: "Education",
                description:
                  "We educate our customers about sustainability and responsible outdoor practices.",
                icon: "📚",
              },
            ].map((value, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-2xl mr-2">{value.icon}</span>
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Tomas Jais",
                role: "Co-Founder & CEO",
                image: tomas,
              },
              {
                name: "Matias Santo",
                role: "Co-Founder & CFO",
                image: matias,
              },
              {
                name: "Jacobo Gonzalez",
                role: "Co-Founder & Sustainability Director",
                image: jacobo,
              },
              {
                name: "Angelica Montague",
                role: "Lead Designer",
                image: angi,
              },
              {
                name: "Jonatan Jona",
                role: "Advisor",
                image: jona,
              },
              {
                name: "Nicole Sanchez",
                role: "Operations Manager",
                image: nicole,
              },
              {
                name: "Sara Pezzaioli",
                role: "Customer Service Specialist",
                image: sara,
              },
              {
                name: "Sofia Ciantra",
                role: "Operations Manager",
                image: sofia,
              },
              {
                name: "Santiago Huggins",
                role: "Store Manager",
                image: santi,
              },
            ].map((member, index) => (
              <Card key={index}>
                <CardHeader>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <CardTitle className="text-center">{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {member.role}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications and Partnerships */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Our Certifications and Partnerships
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: "B Corp Certified", image: bcorp },
              { name: "1% for the Planet", image: planet },
              { name: "Bluesign Approved", image: blue },
              { name: "Fair Trade Certified", image: fair },
            ].map((cert, index) => (
              <div key={index} className="text-center">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  width={100}
                  height={100}
                  className="mx-auto mb-2"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-green-600 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Join Us in Our Mission</h2>
          <p className="mb-6">
            Explore our sustainable products and be part of the change.
          </p>
          <Button asChild>
            <Link href="/#card">Shop Now</Link>
          </Button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-800 text-white py-8 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Products", "Sustainability", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <Link href="#" className="hover:underline">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="mr-2" /> 123 Outdoor Ave, Albuquerque, NM
                87102
              </li>
              <li className="flex items-center">
                <Phone className="mr-2" /> (505) 555-0123
              </li>
              <li className="flex items-center">
                <Mail className="mr-2" /> info@cabra.com
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} CABRA. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
