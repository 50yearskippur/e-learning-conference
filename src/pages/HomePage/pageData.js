import Vr from "../../static-media/vr.png";
import AI from "../../static-media/AI.png";
import Workshop from "../../static-media/workshop.png";

export const PageData = {
    title: "כנס טכנולוגיות למידה",
    subTitle: "בראשות מפקד מערך ההדרכה",
    firstParagraph: 'כנס חדשני וראשון מסוגו בנושא טכנולוגיות למידה \n הכנס מיועד לאנשי מערך ההדרכה \n ולמובילי הדרכה באמ"ן',
    locationInfo: '16.01.2023 | בה"ד 15 | אולם נגב',
    buttons: {
        signUp: "הרשמה",
        openWaze: "פתיחה בוויז",
        addToCalendar: "הוספה ליומן",
    },
    additionalInfo: {
        wazeNavigation: "https://ul.waze.com/ul?preview_venue_id=22806849.228199566.348637&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
        calendarEvent: "https://calendar.google.com/calendar/r/eventedit?text=כנס+טכנולוגיות+למידה&dates=20230116T090000Z/20230116T160000Z&details=כנס+טכנולוגיות+למידה+בבהד+15&location=מחנה+הרצוג+גלילות+רמת+השרון",
        signupForm: "https://forms.office.com/r/JYwbqccc3d",
    },
};

export const ScheduleData = {
    title: "מה בתוכנית?",
    firstEvent: {
        hour: "09:00 - 09:45",
        texts: {
            1: "התכנסות, כיבוד",
            2: "תערוכת תוצרי תחום טכנולוגיות למידה",
            3: 'עמדות VR, עמדות "מחוץ לקופסא"'
        },
    },
    secondEvent: {
        hour: "09:45 - 10:00",
        texts: {
            1: "יריית פתיחה",
            2: "מפקד מערך ההדרכה - ליאור בלופרב",
        },
    },
    thirdEvent: {
        hour: "10:00 - 11:00",
        texts: {
            1: '"יצירתיות בחיים ובעבודה"',
            2: 'ד"ר אייל דורון',
        },
        image: {
            src: AI,
            style: {
                height: "4rem",
                float: "left",
                position: "absolute",
                transform: "translate(-110%, -90%)",
            },
            alt: "AI",
        },
    },
    fourthEvent: {
        hour: "11:00 - 11:15",
        texts: {
            1: "הפסקה",
        },
    },
    fifthEvent: {
        hour: "11:15 - 12:15",
        texts: {
            1: '"חדשנות פורצת גבולות"',
            2: "צביקה פרנקל",
        },
        image: {
            src: Vr,
            style: {
                height: "4rem",
                float: "left",
                position: "absolute",
                transform: "translate(-80%, -70%)",
            },
            alt: "vr",
        },
    },
    sixthEvent: {
        hour: "12:15 - 13:00",
        texts: {
            1: "הפסקה",
        },
    },
    seventhEvent: {
        hour: "13:00 - 13:40",
        texts: {
            1: 'מה חדש במערך ההדרכה?',
        },
    },
    eighthEvent: {
        hour: "13:40 - 13:50",
        texts: {
            1: "התפזרות וחלוקה לסדנאות",
        },
    },
    ninthEvent: {
        hour: "13:50 - 15:30",
        texts: {
            1: "סדנאות",
            2: "break",
            3: "צילום ועריכה בפלאפון",
            4: '(בהובלת מו"ח)',
            5: "break",
            6: "עקרונות עיצוב ויישומם בהדרכה",
            7: "(בהובלת ארטק)",
        },
        image: {
            src: Workshop,
            style: {
                height: "4rem",
                float: "left",
                position: "absolute",
                transform: "translate(240%, -75%)",
            },
            alt: "workshop",
        },
    },
    tenthEvent: {
        hour: "15:30 - 15:40",
        texts: {
            1: "התכנסות",
        },
    },
    eleventhEvent: {
        hour: "15:40 - 16:00",
        texts: {
            1: "סיכום וחלוקת תשורות",
        },
    },
};

const kbdStyle = {
    backgroundColor: "#eee",
    borderRadius: "3px",
    border: "1px solid #b4b4b4",
    boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2), 0 2px 0 0 rgba(255, 255, 255, 0.7) inset",
    color: "#333",
    display: "inline-block",
    fontSize: "0.85em",
    fontWeight: 700,
    lineHeight: 1,
    padding: "2px 4px",
    whiteSpace: "nowrap"
}

export const ContactUs = {
    title: "יש לכם שאלה? בקשה?",
    invatation: "מוזמנים ליצור קשר",
    email: "artechb15@idf.il",
    gayasInfo: "או במייל הצבאי - גאיה גדג' Ctrl + K",
    gayasInfoHTML:
    <>
    או במייל הצבאי - צביקה פרנקל / גאיה גדג' <kbd style={kbdStyle}>Ctrl + K</kbd>
    </>,
};