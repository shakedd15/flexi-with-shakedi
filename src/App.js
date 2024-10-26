import logo from './logo.svg';
import './App.css';
import image1 from './images/backStretch.jpg';
import image3 from './images/background2.jpg';
import mainLogo from './images/Picture21.png';
import me from './images/me-doing-this.png';
import background3 from './images/background3.png';
import background8 from './images/backgroun8.png';
import stretchPhoto from './images/5825580610096319359.jpg';
import eden1 from './images/eden1.jpg';
import eden2 from './images/eden2.jpg';
import commant from './images/commant.png';
import VideoPlayer from './VideoPlayer';

function App() {
  return (
    <>
      <section className="studio-info">
        <div className="studio-logo">
          <img src={mainLogo} alt="Almond Stretching Logo" />
        </div>
        <div className="studio-details"  dir="rtl">
          <p>שיעור ראשון מתנה!</p>
                <br/>
          <p>אנחנו נתמקד בשיפור הדרגתי ובטכניקות מתיחה שיעזרו לך להגיע רחוק יותר ובצורה בטוחה ומהנה
          <br/>
           עם מתיחות מודרכות וליווי צמוד שיעזרו לך להגיע לכל יעד גמישות </p>
          <p>

          </p>
           <br/>
          <p>תל אביב
&#x2728;
           שדרות ח"ן
           </p>
            <br/>


           <p>
           ✨ תני לעצמך את הדחיפה המקצועית שאת צריכה! ✨
           </p>
                       <br/>

           <p>
        <div  className="comment-style">
          <img src={commant} alt="Almond Stretching Logo" />
        </div>
        </p>
        </div>
       <div className="registration-button">
         <a href="#registration" className="btn">להרשמה</a>
       </div>
      </section>


 {/* Hero Section */}
      <section
        className="top-screen"
        style={{
          backgroundImage: `url(${background8})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: '#fff',
          textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000', // קו מתאר
          position: 'relative' // נדרש כדי להציב אלמנטים על התמונה
        }}>

        {/* שכבת הכיסוי השקופה */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.001)',  // שכבה כמעט שקופה
          }}
        ></div>

        {/* התוכן */}
        <div className="hero-content" style={{ position: 'relative' }}>
          <h1><span>STRETCH</span> <br /> <span>YOUR LIMIT</span></h1>
        </div>

      </section>


      {/* Section 3: Our Trainers Section */}
      <section className="trainers-section">
       
        <h2>האימונים שלנו</h2>
        <div className="trainer-circles">
          <div className="circle" id="back-trainer">
            <div className="trainer-name">אימון גב</div>
          </div>

          <div className="circle" id="legs-trainer">
            <div className="trainer-name">אימון רגליים</div>
          </div>
        </div>
         <div className="trainer-circles-explain">
           <div className="circle-explain">
            <p>
                            בשיעור נבצע מתיחות לעמוד השדרה, מומלץ לכל מי שרוצה להגדיל את טווח התנועה של הגב והכתפיים, יציבה נכונה, מניעת פציעות ושיפור אימוני כושר
            </p>
           </div>

           <div className="circle-explain">
                <p>
                            בשיעור נבצע מתיחות לכל סוגי השרירים שקשורים לשפגט בנות ושפגט בנים, מומלץ לכל מי שרוצה להגדיל את טווח התנועה של שרירי הרגליים. בסוף השיעור נבצע את השפגטים
                </p>
           </div>
         </div>
        <div className="registration-button">
          <a href="#registration" className="btn">להרשמה</a>
        </div>

      </section>

      {/* Section 4: Video in Ellipse */}
      <section className="video-section">
        <div className="video-ellipse">
          <VideoPlayer />
        </div>
      </section>

      {/* Section 5: Schedule Section */}
      <section className="schedule-section">
        <h2>מערכת שעות</h2>
        <p>יום שני - 20:00 - גן מאיר - אימון רגליים/גב מתחלף</p>
        <p>יום רביעי - 18:30 - אוניברסיטת תל אביב (פתוח לכולם) - אימון רגליים/גב מתחלף</p>

        <div className="schedule-grid">
          <div className="class-card">
            <img src="https://static.wixstatic.com/media/9d22618a84f444e88901c14271f75a8a.jpg/v1/fill/w_468,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9d22618a84f444e88901c14271f75a8a.jpg" alt="Class 1" />
            <p>שיעור נסיון - חינם</p>
          </div>
          <div className="class-card">
            <img src="https://static.wixstatic.com/media/11062b_93f062443b064191b85639832654ac05~mv2.jpg/v1/fill/w_468,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_93f062443b064191b85639832654ac05~mv2.jpg" alt="Class 2" />
            <p>שיעור בוקר - 40 ש"ח</p>
          </div>
          <div className="class-card">
            <img src="https://static.wixstatic.com/media/11062b_0784fee4aebd4b178e31f63f6c121dd6~mv2.jpg/v1/fill/w_468,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_0784fee4aebd4b178e31f63f6c121dd6~mv2.jpg" alt="Class 3" />
            <p>כרטיסיה של 3 שיעורים, תוקף לחודש אחד - 100 ש"ח</p>
          </div>
          <div className="class-card">
            <img src="https://static.wixstatic.com/media/1a25c2a350eb45aebc2fb934cfbb20d4.png/v1/fill/w_468,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1a25c2a350eb45aebc2fb934cfbb20d4.png" alt="Class 4" />
            <p>שיעור ערב - 40 ש"ח</p>
          </div>
        </div>

        <div className="registration-button">
          <a href="#registration" className="btn">להרשמה</a>
        </div>
      </section>

      {/* Section 6: Registration and Contact Section */}
      <section className="contact-section">
        <div className="contact-info">
          <ul>
            <li><i className="fas fa-map-marker-alt"></i> Meir Garden, Tel Aviv</li>
            <li><i className="fas fa-phone-alt"></i> <a href="https://wa.me/YOUR_NUMBER" target="_blank">Send me on WhatsApp</a></li>
            <li>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-tiktok"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </li>
          </ul>
        </div>

      <div className="contact-form" id="registration">
        <h2>הרשמה</h2>
        <form>
          <label htmlFor="name">First Name / שם מלא <span>*</span></label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="phone">Phone / מספר פלאפון <span>*</span></label>
          <input type="tel" id="phone" name="phone" required />

          <label htmlFor="message">Message / שאלות נוספות</label>
          <textarea id="message" name="message"></textarea>

          <button type="submit">Send</button>
        </form>
      </div>


        <div id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.0362797376376!2d34.78009257554245!3d32.07342772148767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b7aa42d8d5f%3A0x7b8a087de3d9e526!2sMeir%20Garden!5e0!3m2!1sen!2sil!4v1601182122532!5m2!1sen!2sil"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default App;
