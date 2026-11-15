import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Check, ChevronRight, CircleCheck, GitBranch, HeartHandshake, Keyboard, ScanSearch, Sparkles, UsersRound } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import "./styles.css";

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="A11y Relay home">
          <span className="brand-mark" aria-hidden="true"><HeartHandshake size={19} strokeWidth={2.1} /></span>
          <span>A11y Relay</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#how-it-works">How it works</a>
          <a href="#for-organizations">For organizations</a>
          <a href="#open-source">Open source</a>
        </nav>
        <Button className="header-cta" render={<a href="#join" />}>Join the pilot <ArrowUpRight size={16} /></Button>
      </header>

      <main id="top">
        <section className="hero-section page-wrap">
          <div className="hero-copy">
            <Badge variant="outline" className="eyebrow-badge"><span className="status-dot" /> Built with disabled people</Badge>
            <h1>Make the web work for <em>everyone.</em></h1>
            <p className="hero-subtitle">A11y Relay turns lived accessibility barriers into clear, verified fixes for the teams building the open web.</p>
            <div className="hero-actions">
              <Button size="lg" render={<a href="#join" />}>Join the pilot <ArrowUpRight size={17} /></Button>
              <Button size="lg" variant="ghost" render={<a href="#how-it-works" />}>See how it works <ChevronRight size={17} /></Button>
            </div>
            <p className="hero-note"><CircleCheck size={16} /> Open source. Community-led. Built for small teams.</p>
          </div>

          <div className="hero-visual" aria-label="A sample accessibility issue moving from report to verified fix">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="visual-caption">A better feedback loop</div>
            <Card className="issue-card">
              <CardContent>
                <div className="issue-topline"><span className="issue-icon"><Keyboard size={16} /></span><span>Barrier reported</span><span className="issue-time">2m ago</span></div>
                <h2>Checkout form cannot be completed by keyboard</h2>
                <p>“Focus skips from address to submit. I can’t reach the delivery options.”</p>
                <div className="issue-meta"><span>Keyboard navigation</span><span>High impact</span></div>
              </CardContent>
            </Card>
            <div className="connector connector-one"><span /></div>
            <Card className="fix-card">
              <CardContent>
                <div className="fix-check"><Check size={17} /></div>
                <div><strong>Fix verified</strong><p>Verified by the original tester</p></div>
                <span className="fix-date">Today</span>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="signal-strip">
          <div className="page-wrap signal-inner"><span>Accessibility is not a score.</span><span>It is whether someone can get the job done.</span><span className="signal-line" /><span className="signal-muted">Built for real people, not compliance theatre.</span></div>
        </section>

        <section id="how-it-works" className="page-wrap section-block">
          <div className="section-intro"><h2>From blocked to <span>back in.</span></h2><p>One shared workflow for the people who experience barriers and the teams who can remove them.</p></div>
          <div className="steps-grid">
            <div className="step step-primary"><span className="step-number">01</span><ScanSearch size={25} /><h3>Report the barrier</h3><p>A person describes the task they were trying to complete, with the assistive technology they use.</p></div>
            <div className="step"><span className="step-number">02</span><UsersRound size={25} /><h3>Make it actionable</h3><p>A11y Relay turns lived experience into a clear, reproducible issue developers can work from.</p></div>
            <div className="step"><span className="step-number">03</span><CircleCheck size={25} /><h3>Verify the fix</h3><p>The original tester checks the change. The solution becomes useful knowledge for the next team.</p></div>
          </div>
        </section>

        <section id="for-organizations" className="for-org-section">
          <div className="page-wrap org-grid">
            <div><p className="section-kicker">For the teams doing more with less</p><h2>High-quality audits should not be a luxury.</h2><p className="org-copy">Small nonprofits, civic groups, and community organizations deserve tools that help them listen, repair, and keep improving - without a six-figure consultancy.</p><Button variant="outline" render={<a href="#join" />}>Bring your team <ArrowUpRight size={16} /></Button></div>
            <div className="org-list">
              {['See what automated checks miss', 'Prioritize issues by real user impact', 'Track fixes from report to resolution', 'Build an accessibility practice that lasts'].map((item) => <div className="org-list-item" key={item}><Check size={17} /><span>{item}</span></div>)}
            </div>
          </div>
        </section>

        <section id="open-source" className="page-wrap open-section">
          <div className="open-copy"><p className="section-kicker">A public good, in public</p><h2>Keep the fix. Share the learning.</h2><p>Every reporting pattern, repair workflow, and lesson learned will be open for other communities to use, adapt, and improve.</p><a className="text-link" href="https://github.com" target="_blank" rel="noreferrer">Explore the repository <GitBranch size={17} /></a></div>
          <div className="open-stamp"><Sparkles size={25} /><span>Open by design</span><small>Code, protocol, and community playbook</small></div>
        </section>

        <section id="join" className="join-section page-wrap">
          <div className="join-inner"><p className="section-kicker">Help shape the first release</p><h2>Tell us what the web gets wrong.</h2><p>We are looking for disabled testers, accessibility practitioners, developers, and small organizations to join the pilot.</p><Button size="lg" render={<a href="mailto:hello@a11yrelay.org?subject=Join%20the%20A11y%20Relay%20pilot" />}>Join the pilot <ArrowUpRight size={17} /></Button></div>
        </section>
      </main>

      <footer className="site-footer page-wrap"><span className="brand"><span className="brand-mark" aria-hidden="true"><HeartHandshake size={17} /></span>A11y Relay</span><span>Built with care for a more usable web.</span><span>© 2026</span></footer>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
