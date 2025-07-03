export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white text-gray-800">
            <section className="max-w-6xl mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">About Us</h1>

                <p className="text-lg leading-relaxed mb-8 text-center">
                    At Wanderly Travels, we believe that every journey should be unforgettable. Whether you're chasing sunsets,
                    hiking mountains, or exploring vibrant cities, our mission is to make travel easy, affordable, and inspiring.
                </p>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                        <p className="text-base leading-relaxed mb-4">
                            Founded in 2020 by a group of passionate travelers, Wanderly Travels started as a blog and quickly grew into a full-service travel platform.
                            We have helped thousands of adventurers plan their perfect getaways with hand-picked destinations, personalized itineraries, and exclusive deals.
                        </p>
                        <p className="text-base leading-relaxed">
                            We're more than a travel company — we're your companions on the road to discovery.
                        </p>
                    </div>

                    <img
                        src="/images/about-travel.jpg" // Make sure this image exists in public/images
                        alt="Traveling the world"
                        className="rounded-2xl shadow-md w-full h-auto object-cover"
                    />
                </div>

                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
                    <ul className="space-y-3 text-base text-gray-700">
                        <li>✔️ Curated travel packages</li>
                        <li>✔️ 24/7 customer support</li>
                        <li>✔️ Trusted by thousands of travelers</li>
                        <li>✔️ Sustainable and ethical tourism practices</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
  