import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import { Button, type ButtonVariant } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import VideoCarousel from "@/components/VideoCarousel";

export default function Home() {
  return (
    <>
      <Head>
        <title>Join Frugal Season - Earn $1,000+/Month Finding Hidden Deals</title>
        <meta name="description" content="Join Frugal Season and learn how to earn an extra $1,000+/month finding hidden deals and price errors. Access exclusive training, mentorship, and a supportive community." />
        <meta name="keywords" content="frugal season, price errors, retail arbitrage, online arbitrage, deals, reselling, make money online" />
        <meta property="og:title" content="Join Frugal Season - Earn $1,000+/Month Finding Hidden Deals" />
        <meta property="og:description" content="Join Frugal Season and learn how to earn an extra $1,000+/month finding hidden deals and price errors. Access exclusive training, mentorship, and a supportive community." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="flex min-h-screen flex-col">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <Badge className="mb-4 animate-bounce">
              🚀 4.98 Stars (3,234+ Reviews) ⭐️
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Welcome to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Frugal Season
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join our elite community of deal hunters and start earning an extra $1,000+/month 
              finding hidden clearance deals, price errors, and retail arbitrage opportunities! 🎯
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                asChild
              >
                <a href="https://whop.com/frugal-szn-1/?a=digitalartlab">
                  Join Frugal Season Now (Limited Spots) 🚀
                </a>
              </Button>
              <Button 
                variant={"outline" as ButtonVariant}
                asChild
              >
                <a href="#features">
                  See How It Works ⚡️
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Trusted by 3,000+ members & generating over $25,000,000+ in profits 💰
            </p>
          </div>
        </section>

        {/* Success Stories with Videos */}
        <section className="py-8 md:py-12 bg-muted/50">
          <div className="container mx-auto px-2 md:px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-3 md:mb-4">
              Real Results from Our Community
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-6 md:mb-8">
              Watch how our members are finding incredible deals and making serious profits
            </p>
            <VideoCarousel />
            <div className="text-center mt-8 md:mt-10">
              <Button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                asChild
              >
                <a href="https://whop.com/frugal-szn-1/?a=digitalartlab">
                  Start Finding Deals Like These 🎯
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              😩 Are You Tired of These Struggles? 😩
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🔍",
                  title: "Missing Hidden Deals",
                  description: "You see other people finding incredible deals and making a profit, while you struggle to find them."
                },
                {
                  icon: "💰",
                  title: "Financially Stuck",
                  description: "You can't seem to get ahead because you're only relying on your current income, not working for you."
                },
                {
                  icon: "⏰",
                  title: "Wasting Time Researching",
                  description: "All that time spent not finding any deals."
                },
                {
                  icon: "🤝",
                  title: "Lacking Connections",
                  description: "Not having access to the right information, and lacking community."
                },
                {
                  icon: "😕",
                  title: "Lost in Reselling",
                  description: "Feeling lost and overwhelmed due to lack of experience."
                }
              ].map((problem, index) => (
                <Card key={index} className="bg-background">
                  <CardHeader>
                    <div className="text-4xl mb-4">{problem.icon}</div>
                    <CardTitle>{problem.title}</CardTitle>
                    <CardDescription>{problem.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                asChild
              >
                <a href="https://whop.com/frugal-szn-1/?a=digitalartlab">
                  Solve These Problems Today 🎯
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Introducing Frugal Season: Your Path to Financial Freedom
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              We've built a robust community + platform designed to empower you with the tools to find and capitalize on hidden deals, price errors, and other money-making opportunities.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎮",
                  title: "Exclusive Discord Community",
                  description: "Connect with 30,000+ like-minded members passionate about saving and making money."
                },
                {
                  icon: "🔔",
                  title: "Real-Time Deal Alerts",
                  description: "Never miss another deal with our live alerts system, giving you a first movers advantage."
                },
                {
                  icon: "📚",
                  title: "Comprehensive Training",
                  description: "Master the art of finding rare deals with our guided resources and courses."
                },
                {
                  icon: "👨‍🏫",
                  title: "50+ Mentorship",
                  description: "Gain personal mentorship and advice from self-made millionaires."
                },
                {
                  icon: "🤖",
                  title: "Custom AI Tools",
                  description: "Take all the guesswork out of your flips with our custom AI powered tools."
                },
                {
                  icon: "🎯",
                  title: "Loot Locator",
                  description: "Find deals just a short drive away with our location-based deal finder."
                }
              ].map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button 
                variant={"outline" as ButtonVariant}
                asChild
              >
                <a href="https://whop.com/frugal-szn-1/?a=digitalartlab">
                  Get Access to All Features ✨
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Revenue Streams */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              More Than Just Price Errors
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Discover multiple ways to generate income with our comprehensive platform
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { icon: "🏷️", title: "Price Errors" },
                { icon: "🏪", title: "Retail Arbitrage" },
                { icon: "💻", title: "Online Arbitrage" },
                { icon: "🎲", title: "Sports Betting" },
                { icon: "📈", title: "Stocks" },
                { icon: "💎", title: "Investing" },
                { icon: "💳", title: "Credit Building" },
                { icon: "✈️", title: "Free Travel" },
                { icon: "🤖", title: "Custom AI Tools" },
                { icon: "🎯", title: "Bounty Glitches" }
              ].map((stream, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="text-4xl mb-2">{stream.icon}</div>
                  <h3 className="font-semibold">{stream.title}</h3>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button 
                variant={"outline" as ButtonVariant}
                asChild
              >
                <a href="https://whop.com/frugal-szn-1/?a=digitalartlab">
                  Start Earning Today 💰
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Get Started in 3 Easy Steps
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  step: "1",
                  icon: "🤝",
                  title: "Join the Community",
                  description: "Get instant access to our Discord community and all resources"
                },
                {
                  step: "2",
                  icon: "📚",
                  title: "Access Resources",
                  description: "Go through our comprehensive training and tools"
                },
                {
                  step: "3",
                  icon: "💰",
                  title: "Start Earning",
                  description: "Apply what you've learned and start making profits"
                }
              ].map((step, index) => (
                <div key={index} className="relative text-center">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="text-2xl font-bold text-primary mb-2">Step {step.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                asChild
              >
                <a href="https://whop.com/frugal-szn-1/?a=digitalartlab">
                  Get Started Now 🚀
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Founder Story */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                The Frugal Season Story: Built By Someone Who's Been There
              </h2>
              <blockquote className="text-lg md:text-xl lg:text-2xl italic text-muted-foreground mb-8">
                "I spent hours shopping the clearance rack in search of brand name clothing just to fit in. That drive for finding bargains never left me. We launched Frugal Season to change the way you shop. Forever."
              </blockquote>
            </div>
            <div className="text-center mt-12">
              <Button 
                variant={"outline" as ButtonVariant}
                asChild
              >
                <a href="https://whop.com/frugal-szn-1/?a=digitalartlab">
                  Join Rios's Community 🤝
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Can I cancel anytime?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can cancel your membership anytime without any hassle.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is there an up front fee for joining?</AccordionTrigger>
                  <AccordionContent>
                    No, there are no upfront fees. You only pay the $75 monthly fee, or $799 yearly depending on your plan. The yearly plan saves you over 10% over the monthly plan.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Do you have training for reselling?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we provide extensive training that caters to both beginners and experienced resellers. Our curriculum covers retail arbitrage, online arbitrage, price errors, and more!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Choose Your Path to Success
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Start your journey to financial freedom today
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="relative">
                <CardHeader>
                  <CardTitle>Monthly Plan</CardTitle>
                  <div className="text-3xl font-bold mb-4">$75/month</div>
                  <CardDescription>Perfect for those just getting started</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">✅ Full Discord Access</li>
                    <li className="flex items-center">✅ All Training Resources</li>
                    <li className="flex items-center">✅ Deal Alerts</li>
                    <li className="flex items-center">✅ Mentorship Access</li>
                    <li className="flex items-center">✅ Cancel Anytime</li>
                  </ul>
                  <Button className="w-full mt-6" asChild>
                    <a href="https://whop.com/frugal-szn-1/?a=digitalartlab">Get Started</a>
                  </Button>
                </CardContent>
              </Card>
              <Card className="relative border-primary">
                <Badge className="absolute -top-3 right-4 bg-primary">Best Value</Badge>
                <CardHeader>
                  <CardTitle>Yearly Plan</CardTitle>
                  <div className="text-3xl font-bold mb-4">$799/year</div>
                  <CardDescription>Save $100 with yearly billing</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">✅ Everything in Monthly</li>
                    <li className="flex items-center">✅ Priority Support</li>
                    <li className="flex items-center">✅ Early Access to Features</li>
                    <li className="flex items-center">✅ Exclusive Yearly Workshops</li>
                    <li className="flex items-center">✅ Save $100</li>
                  </ul>
                  <Button className="w-full mt-6 bg-primary" asChild>
                    <a href="https://whop.com/frugal-szn-1/?a=digitalartlab">Join & Save</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Start Making Extra Income?
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join Frugal Season today and become a member of a community that helps you take steps toward financial freedom.
            </p>
            <Button 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              asChild
            >
              <a href="https://whop.com/frugal-szn-1/?a=digitalartlab">
                Join Frugal Season Now 🚀
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Plus you're covered by our Money back guarantee: if you do not make your money back within the first month, we will refund it — you have nothing to lose but so much to gain.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-muted/50 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-muted-foreground hover:text-foreground">Features</a></li>
                  <li><a href="#pricing" className="text-muted-foreground hover:text-foreground">Pricing</a></li>
                  <li><a href="#testimonials" className="text-muted-foreground hover:text-foreground">Reviews</a></li>
                  <li><a href="#faq" className="text-muted-foreground hover:text-foreground">FAQs</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Instagram</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Twitter</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">TikTok</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">YouTube</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground">Refund Policy</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <p className="text-muted-foreground">Need help? Reach out to us on Discord after joining.</p>
              </div>
            </div>
            <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border">
              <p className="mb-4"> {new Date().getFullYear()} Frugal Season. All rights reserved.</p>
              <p>As an affiliate, I earn a commission if you join through my link. Thank you for supporting my work!</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
